from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, schemas, crud
from priority import calculate_priority
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create Task
@app.post("/tasks")
def create(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task)

# Get All Tasks
@app.get("/tasks")
def read_tasks(db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db)
    result = []
    for t in tasks:
        priority = calculate_priority(t)
        result.append({
    "id": t.id,
    "title": t.title,
    "deadline": t.deadline,   # ✅ ADD THIS
    "priority": priority,
    "completed": t.completed
})
    return result

# Complete Task
@app.put("/tasks/{task_id}")
def complete(task_id: int, db: Session = Depends(get_db)):
    return crud.complete_task(db, task_id)

# 🔥 WHAT SHOULD I DO TODAY
@app.get("/recommend")
def recommend(db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db)

    pending_tasks = [t for t in tasks if not t.completed]

    scored = [(t, calculate_priority(t)) for t in pending_tasks]

    sorted_tasks = sorted(scored, key=lambda x: x[1], reverse=True)

    top3 = sorted_tasks[:3]

    return [
        {
            "title": t.title,
            "priority": score
        }
        for t, score in top3
    ]
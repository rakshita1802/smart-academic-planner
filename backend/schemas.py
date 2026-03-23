from pydantic import BaseModel
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    deadline: datetime
    difficulty: str
    estimated_time: int

class TaskResponse(TaskCreate):
    id: int
    completed: bool

    class Config:
        from_attributes = True
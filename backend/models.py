from sqlalchemy import Column, Integer, String, DateTime, Boolean
from database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    deadline = Column(DateTime, nullable=False)
    difficulty = Column(String)  # Easy / Medium / Hard
    estimated_time = Column(Integer)  # in hours
    completed = Column(Boolean, default=False)
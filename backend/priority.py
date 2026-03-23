from datetime import datetime

def calculate_priority(task):
    now = datetime.now()

    # 1. Deadline proximity (closer = higher score)
    hours_left = (task.deadline - now).total_seconds() / 3600

    if hours_left <= 0:
        deadline_score = 100
    else:
        deadline_score = max(0, 100 - hours_left)

    # 2. Difficulty weight
    difficulty_map = {
        "Easy": 1,
        "Medium": 2,
        "Hard": 3
    }
    difficulty_score = difficulty_map.get(task.difficulty, 1) * 10

    # 3. Estimated time weight
    time_score = task.estimated_time * 2

    # Final priority
    priority = deadline_score + difficulty_score + time_score

    return priority
import os
from pathlib import Path

from robocorp import browser
from robocorp.tasks import task


@task
def solve_challenge():
    print("solved")

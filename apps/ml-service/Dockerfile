FROM python:3.12-slim
WORKDIR /app
COPY pyproject.toml requirements.txt ./
RUN pip install -r requirements.txt
COPY src ./src
CMD ["python", "src/main.py"]

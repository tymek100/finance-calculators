# Finance Calculators

### Prepare environment

#### 0. System dependencies
- Python 3.12
- Node v20
- Nginx

#### 1. Install Python dependencies.
```bash
python3.12 -m venv venv
source venv/bin/activate
pip install -r api/requirements.txt
```

#### 2. Install Node dependencies.
```bash
cd app && npm i
```

### Run App for development
```bash
honcho start
```

### Run App for Production
```bash
cd api && uvicorn main:app --host 0.0.0.0 --port 8000 --reload
nginx -c /path/to/your/repo/nginx.conf -p /path/to/your/repo/ > /path/to/your/repo/nginx.log 2>&1 &
```


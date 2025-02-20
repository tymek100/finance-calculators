# Finance Calculators

### Prepare environment

#### 0. System dependencies
- Python 3.12
- Node v20
- Nginx

#### 1. Install Python dependencies.
```bash
cd server
python3.12 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### 2. Install Node dependencies.
```bash
cd front
npm install
```

### Run Server
```bash
cd server
source venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### Run App for Development
```bash
npm run dev
```

### Run App for Production
```bash
nginx -c /path/to/your/repo/nginx.conf -p /path/to/your/repo/ > /path/to/your/repo/nginx.log 2>&1 &
```


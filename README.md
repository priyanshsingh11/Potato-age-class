# Potato Age Predictor 🥔

A Deep Learning web app to predict the health and disease stage of potato leaves from images using a trained TensorFlow/Keras model.  
Built with **FastAPI** (backend) and **React + Tailwind CSS** (frontend).

---

## 🚀 Features

- Upload a potato leaf image and get instant predictions (Early Blight, Late Blight, Healthy)
- Modern, responsive UI with image preview
- FastAPI backend serving a trained Keras model

---

---

## 🏗️ Project Structure

```
Potato Age/
├── api/                # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── Model/
│       └── model_v1.keras
├── frontend/           # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
```

---

## ⚡ Quick Start (Local)

### 1. Clone the repo

```sh
git clone https://github.com/your-username/Potato-age-class.git
cd Potato-age-class
```

### 2. Backend (FastAPI)

```sh
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```

- Make sure `model_v1.keras` is in the correct path as used in `main.py`.

### 3. Frontend (React)

```sh
cd ../frontend
npm install
npm start
```

- The app runs at [http://localhost:3000](http://localhost:3000)
- The backend runs at [http://localhost:8000](http://localhost:8000)

---


## 📝 API Endpoints

- `POST /predict` — Upload an image and get prediction
- `GET /ping` — Health check

---

## 📦 Requirements

- Python 3.8+
- Node.js 16+
- See `api/requirements.txt` and `frontend/package.json` for dependencies

---

## 🙏 Credits

- [TensorFlow](https://www.tensorflow.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License

MIT License

---

> Made with ❤️ by Priyansh Singh (https://github.com/priyanshsingh11)

# Server-Driven UI: Backend

Backend ini dibangun menggunakan **NestJS**, sebuah framework Node.js yang berbasis TypeScript. Peran utama backend dalam sistem ini adalah menyediakan JSON yang berisi **struktur UI**, serta menangani **autentikasi** dan **manajemen pengguna**.

## 🎯 Tujuan
- **Menjadikan UI dapat dikendalikan dari server** tanpa perlu mengubah kode di frontend.
- **Memisahkan logika bisnis dan UI**, sehingga perubahan tampilan tidak memengaruhi logika backend.
- **Menyediakan API otentikasi** berbasis JWT untuk login/logout pengguna.

## 🛠️ Teknologi yang Digunakan
- **NestJS** - Framework backend berbasis TypeScript.
- **JWT (JSON Web Token)** - Untuk autentikasi pengguna.
- **TypeORM** - Untuk koneksi ke database.
- **SQLite / PostgreSQL** - Penyimpanan data pengguna dan konfigurasi UI.

## 📌 Alur Kerja Backend
1. **Menyediakan JSON UI**
   - Backend memiliki endpoint seperti `/ui/auth`, `/ui/home`, dan `/ui/dashboard` yang mengembalikan JSON yang akan digunakan frontend untuk merender tampilan.

2. **Otentikasi & Manajemen Pengguna**
   - Pengguna bisa **login & register** dengan JWT.
   - Token JWT digunakan untuk mengakses halaman yang membutuhkan autentikasi (misalnya `/dashboard`).

3. **Manajemen UI di Server**
   - Admin backend bisa **mengubah tampilan UI** hanya dengan mengubah JSON di endpoint terkait.
   - Perubahan UI langsung diterapkan di frontend tanpa perlu deployment ulang.


## 📂 Struktur Projek

### Backend (NestJS)
```
backend/
|── dist
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── modules/
│   │   ├── services/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── user.repository.ts
│   │   ├── ui/
│   │   │   ├── app.ui.controller.ts
│   │   ├── user/
│   │   │   ├── userp.entity.ts
│   ├── app.module.ts
│   ├── main.ts
├── package.json
```
---

## 🚀 Cara menjalankan

### 1️⃣ Backend (NestJS)
#### Install dependencies:
```sh
cd backend
npm install
```

#### Jalankan server backend:
```sh
npm run start:dev
```

## 🔗 API Routes
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | /auth/profile    | Get user profile         |
| POST   | /auth/login      | Login user               |
| POST   | /auth/register   | Register new user        |
| GET    | /ui/home         | Get home UI components   |
| GET    | /ui/auth         | Get auth UI components   |
| GET    | /ui/register     | Get register UI components   |

---

## 📜 Lisensi
This project is licensed under the MIT License.

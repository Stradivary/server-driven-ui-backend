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
- **SQLite / PostgreSQL** (supabase) - Penyimpanan data pengguna dan konfigurasi UI.

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
|── dist  --> folder untuk hasil build aplikasi
├── src/ --> folder source aplikasi
│   ├── app.module.ts --> file module utama aplikasi
│   ├── main.ts  --> file entry utama aplikasi
│   ├── modules/ --> folder untuk menyimpan module aplikasi
│   │   ├── services/ --> folder untuk menyimpan service yang ada pada aplikasi
│   │   │   ├── auth.module.ts --> file module service aplikasi
│   │   │   ├── auth.controller.ts --> file module auth controller
│   │   │   ├── auth.service.ts --> file service aplikasi
│   │   │   ├── user.repository.ts --> file repository aplikasi
│   │   ├── ui/ --> folder untuk module ui controller
│   │   │   ├── app.ui.controller.ts  --> file controller untuk server driven UI
│   │   ├── user/ --> folder user entity
│   │   │   ├── userp.entity.ts --> file entity user untuk ORM
├── package.json --> file list package module untuk membangun dan instalasi aplikasi
```
---

## 🧭 Arsitektur Backend

```
[Frontend]  ── GET /ui/home ───────────────▶ [UIController]
            ── POST /auth/register ─────▶ [AuthService → DB]
            ── POST /auth/login ───────▶ [AuthService → DB]
            ── GET /auth/profile ──────▶ [AuthGuard → DB]
                                           ↓
                                        Supabase
```

Penjelasan:
- Setiap endpoint `/ui/...` mengembalikan struktur UI JSON untuk ditampilkan frontend.
- Endpoint `/auth/...` menangani login dan registrasi, serta profile check berdasarkan token.
- Semua operasi database dilakukan melalui TypeORM ke Supabase.
- Backend bertindak sebagai pengontrol penuh UI dan autentikasi.

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

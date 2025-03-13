# Round-Robin Coupon Distribution with Abuse Prevention

## 🚀 Project Overview
This is a live web application that distributes coupons to guest users in a **round-robin** manner. It includes **abuse prevention mechanisms** to stop users from exploiting page refreshes to claim multiple coupons within a restricted time frame.

## 🛠 Features
- **Coupon Distribution:** Coupons are assigned sequentially to users for even distribution.
- **Guest Access:** No login or account creation required.
- **Abuse Prevention:**
  - **IP Tracking:** Users are restricted from claiming multiple coupons from the same IP within a specific time (e.g., 1 hour).
  - **Cookie Tracking:** Ensures users can’t bypass restrictions by changing their IP.
- **User Feedback:** Displays messages for successful claims or remaining wait time.
- **Deployment:** Hosted on **Vercel** for public access.

---

## ⚙️ Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API Routes (Serverless Functions)
- **Database:** MongoDB (Atlas)

---

## 📌 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/round-robin-coupon.git
cd round-robin-coupon
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env.local** file and add:
```env
MONGODB_URI=mongodb+srv://yourusername:yourpassword@yourcluster.mongodb.net/CouponDb
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4️⃣ Run the Project Locally
```bash
npm run dev
```
**Project will run at:** `http://localhost:3000`
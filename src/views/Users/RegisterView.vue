<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg p-4">
          <h2 class="text-center mb-4">ฟอร์มลงทะเบียน</h2>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">ชื่อ-นามสกุล</label>
              <input type="text" class="form-control" id="name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">อีเมล</label>
              <input type="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">รหัสผ่าน</label>
              <input
                type="password"
                class="form-control"
                id="password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label"
                >ยืนยันรหัสผ่าน</label
              >
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">เบอร์โทรศัพท์</label>
              <input type="tel" class="form-control" id="phone" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              ลงทะเบียน
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="col-md-8 mx-auto">
    <div class="card" style="background-color: rgb(34 43 53)">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">حاسبة الأرباح</h2>

        <div class="mb-3">
          <label for="activeClients" class="form-label">
            العملاء النشطون
            <span
              class="ms-1"
              data-bs-toggle="tooltip"
              title="عدد العملاء النشطين"
              >ⓘ</span
            >
          </label>
          <input
            type="number"
            id="activeClients"
            v-model="activeClients"
            class="form-control text-white"
            min="1"
          />
        </div>
        <div class="mb-3">
          <label for="lotsPerMonth" class="form-label">
            اللوتات المتداولة شهريًا لكل عميل
          </label>
          <input
            type="number"
            id="lotsPerMonth"
            v-model="lotsPerMonth"
            class="form-control text-muted"
            min="1"
          />
        </div>
        <button
          @click="calculateEarnings"
          class="btn w-100 d-flex align-items-center justify-content-center"
          style="background-color: #1c8b89"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-calculator me-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
            />
            <path
              d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"
            />
          </svg>
          حساب
        </button>
        <div class="mt-4 row">
          <div class="col-6">
            <p class="text-muted mb-0">الأرباح الشهرية</p>
            <p class="h4 text-success">
              ${{ monthlyEarnings.toLocaleString() }}
            </p>
          </div>
          <div class="col-6 text-end">
            <p class="text-muted mb-0">الأرباح السنوية</p>
            <p class="h4 text-primary">
              ${{ yearlyEarnings.toLocaleString() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AffiliateEarningsCalculator",
  setup() {
    const activeClients = ref(1);
    const lotsPerMonth = ref(1);
    const monthlyEarnings = ref(0);
    const yearlyEarnings = ref(0);

    const calculateEarnings = () => {
      const monthly = activeClients.value * lotsPerMonth.value * 4.2;
      monthlyEarnings.value = monthly;
      yearlyEarnings.value = monthly * 12;
    };

    return {
      activeClients,
      lotsPerMonth,
      monthlyEarnings,
      yearlyEarnings,
      calculateEarnings,
    };
  },
};
</script>

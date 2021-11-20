<template>
  <div>
    <!-- Investment Navbar -->
    <div class="nav" @click="$fetch">
      <nav class="absolute left-72">
        <div>
          <ul class="flex ml-4 mt-8">
            <li
              class="mr-6"
              @click="selectedLink = 'all'"
              :class="{ active: selectedLink === 'all' }"
            >
              <NuxtLink to="#">All</NuxtLink>
            </li>
            <li
              class="mr-6"
              @click="selectedLink = 'active'"
              :class="{ active: selectedLink === 'active' }"
            >
              <NuxtLink to="#">Active</NuxtLink>
            </li>
            <li
              @click="selectedLink = 'coming_soon'"
              :class="{ active: selectedLink === 'coming_soon' }"
            >
              <NuxtLink to="#">Coming Soon</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr class="absolute mt-20 border-gray-300" />
    </div>

    <!-- Investment Cards -->
    <!-- All Investments -->
    <div class="investment flex absolute" v-if="selectedLink === 'all'">
      <div
        class="h-auto w-90 rounded-t-lg bg-white divide-y-2 mr-11"
        v-for="(investment, index) in allInvestments"
        :key="index"
      >
        <div>
          <img
            :src="investment.banner"
            :alt="investment.banner_alt"
            class="max-h-30 w-full rounded-t-lg"
          />
          <div class="p-4">
            <span class="badge px-3 py-1 rounded text-sm">2 days left</span>
          </div>
          <div class="px-4">
            <h1 class="text-xl font-bold">{{ investment.title }}</h1>
            <p>
              <span class="text-lg font-bold text-green-400 mr-3">35%</span
              >1.285.000 &euro; left to fund
            </p>
            <progress value="35" max="100" class="h-0.9 w-full block mt-1.5">
              35%
            </progress>
            <div>
              <p class="p-1 text-sm">{{ investment.teaser }}</p>
            </div>
            <div class="mt-4 mb-3">
              <span class="status px-3 py-1 rounded-full text-sm">{{
                investment.status
              }}</span>
              <span class="status px-2 py-1 rounded-full text-sm">{{
                investment.type
              }}</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 divide-x-2 p-1">
          <div>
            <h1 class="font-bold text-center">
              {{ investment.investor_count }}
            </h1>
            <p class="text-xs text-center">Want to invest</p>
          </div>
          <div>
            <h1 class="font-bold text-center">
              {{ investment.investment_goal }} &euro;
            </h1>
            <p class="text-xs text-center">Funding Round</p>
          </div>
        </div>
        <div class="p-2">
          <button class="w-full p-2 text-white rounded-lg">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Investment Depending on status -->
    <div class="investment flex absolute" v-else>
      <div
        class="h-auto w-90 rounded-t-lg bg-white divide-y-2 mr-11"
        v-for="(investment, index) in statusInvestments"
        :key="index"
      >
        <div>
          <img
            :src="investment.banner"
            :alt="investment.banner_alt"
            class="max-h-30 w-full rounded-t-lg"
          />
          <div class="p-4">
            <span class="badge px-3 py-1 rounded text-sm">2 days left</span>
          </div>
          <div class="px-4">
            <h1 class="text-xl font-bold">{{ investment.title }}</h1>
            <p>
              <span class="text-lg font-bold text-green-400 mr-3">35%</span
              >1.285.000 &euro; left to fund
            </p>
            <progress value="35" max="100" class="h-0.9 w-full block mt-1.5">
              35%
            </progress>
            <div>
              <p class="p-1 text-sm">{{ investment.teaser }}</p>
            </div>
            <div class="mt-4 mb-3">
              <span class="status px-3 py-1 rounded-full text-sm">{{
                investment.status
              }}</span>
              <span class="status px-2 py-1 rounded-full text-sm">{{
                investment.type
              }}</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 divide-x-2 p-1">
          <div>
            <h1 class="font-bold text-center">
              {{ investment.investor_count }}
            </h1>
            <p class="text-xs text-center">Want to invest</p>
          </div>
          <div>
            <h1 class="font-bold text-center">
              {{ investment.investment_goal }} &euro;
            </h1>
            <p class="text-xs text-center">Funding Round</p>
          </div>
        </div>
        <div class="p-2">
          <button class="w-full p-2 text-white rounded-lg">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLink: "all",
      allInvestments: [],
      statusInvestments: [],
    };
  },

  async fetch() {
    // fetching all investments
    this.allInvestments = await fetch(
      "https://prime-crowd.com/api/mock/rounds"
    ).then((res) => res.json());

    // fetching depending on status
    this.statusInvestments = await fetch(
      "https://prime-crowd.com/api/mock/rounds"
    )
      .then((res) => res.json())
      .then((res) =>
        res.filter((investment) => investment.status == this.selectedLink)
      );
  },
};
</script>

<style>
li {
  display: block;
  color: #063847;
}

.nav hr {
  top: 3.35rem;
  right: 0;
  width: 78%;
  margin-right: 2rem;
}

.nav .active {
  font-weight: bold;
  border-bottom: 3px solid #063847;
}

.investment {
  top: 11rem;
  left: 19rem;
}

.investment .badge {
  background-color: #063847;
  color: white;
}

.investment h1 {
  color: #0a4658;
}

.investment p {
  color: #0a4658;
}

progress::-webkit-progress-value {
  background: #34d399;
}

.investment .status {
  background-color: #e0ecf3;
}

.investment button {
  background-color: #063847;
}
</style>

<script setup lang="ts">
import BaseButton from './components/BaseButton/BaseButton.vue';
import BaseCard from './components/BaseCard/BaseCard.vue';
import BaseInputText from './components/BaseInputText/BaseInputText.vue';
import BaseLabel from './components/BaseLabel/BaseLabel.vue';
import BaseTypography from './components/BaseTypography/BaseTypography.vue';
</script>

<template>
  <div class="bg-background text-foreground p-6">
    <div class="space-y-6 space-x-4">
      <BaseTypography type="h1">Welcome to Hewo Kit</BaseTypography>
      <BaseCard>
        <template #card-title> Login to your account </template>
        <template #card-description>
          Enter your email below to login to your account
        </template>
        <template #card-content>
          <form action="">
            <div className="flex flex-col gap-6">
              <div class="grid gap-2">
                <BaseLabel html-for="email">Email</BaseLabel>
                <BaseInputText
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="grid gap-2">
                <BaseLabel html-for="password">Password</BaseLabel>
                <BaseInputText
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </template>
        <template #card-footer>
          <div class="flex flex-col gap-2">
            <BaseButton
              full-width
              text="Login"
            />
            <BaseButton
              full-width
              variant="outline"
              text="Login with Google"
            />
          </div>
        </template>
      </BaseCard>
    </div>
  </div>
</template>

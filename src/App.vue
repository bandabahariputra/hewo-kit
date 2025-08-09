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
      <BaseTypography type="h1">
        Taxing Laughter: The Joke Tax Chronicles
      </BaseTypography>
      <BaseTypography type="h2"> The People of the Kingdom </BaseTypography>
      <BaseTypography type="h3"> The Joke Tax </BaseTypography>
      <BaseTypography type="h4"> People stopped telling jokes </BaseTypography>
      <div>
        <BaseTypography>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </BaseTypography>
        <BaseTypography>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </BaseTypography>
        <BaseTypography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
          voluptatibus libero quibusdam reprehenderit alias fuga accusantium
          quo, consequuntur cupiditate ab aliquam totam dolor blanditiis dicta
          fugit impedit saepe ipsa?
        </BaseTypography>
      </div>
      <BaseTypography type="blockquote">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </BaseTypography>
      <BaseTypography type="inline-code">
        @radix-ui/react-alert-dialog
      </BaseTypography>
      <BaseTypography type="lead">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </BaseTypography>
      <BaseTypography type="large"> Are you absolutely sure? </BaseTypography>
      <BaseTypography type="small"> Email address </BaseTypography>
      <BaseTypography type="muted"> Enter your email address. </BaseTypography>
    </div>
  </div>
</template>

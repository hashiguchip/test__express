<template>
  <div>
    <h1>Welcome!</h1>
    <div>これはテストページです</div>
    <NLink to="/about">
      About Page
    </NLink>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home page"
  }
};
</script>

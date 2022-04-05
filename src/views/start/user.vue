<template>
    <div>
    User: {{$route.params.id}}
    </div>
</template>

<script>
export default {
  
}

setTimeout(() => {
    console.log('router push')
    this.router.push({path: 'about', hash:'#team'})
}, 3000);
</script>

<style></style>

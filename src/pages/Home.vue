<template>
    <div>
      <h2>和弦练习</h2>
      <router-link to="/workspace">ENTER</router-link>
    </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
@keyframes hover {
  from {  letter-spacing: 1.2rem }
}
$color: #a0a0a0;

div {
    position: absolute;
    width: 100%;
    height: 100%;
    color: $color;
    text-align: center;
    letter-spacing: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    box-sizing: border-box;
    padding: 18% 0;
    background: url('https://wallhalla.com/images/bg-home.png') no-repeat center center;
    background-size: cover;
    a{
      color: $color;
      text-decoration: none;
      transition: .3s;
    }
}
</style>
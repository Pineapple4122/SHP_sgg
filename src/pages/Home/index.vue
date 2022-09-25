<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'

export default {
   name: 'Home',
   components: {
    ListContainer,
    Recommend,
    Rank,
   },
}
</script>

<style>

</style>
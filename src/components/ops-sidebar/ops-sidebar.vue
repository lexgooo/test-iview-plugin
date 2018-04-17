<template>
    <div class="menu">
      <Menu active-name="1-2" :open-names="['1']" accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-filing"></Icon>
            Navigation Two
          </template>
          <MenuItem name="2-1">Option 5</MenuItem>
          <MenuItem name="2-2">Option 6</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-gear"></Icon>
            Navigation Three
          </template>
          <MenuItem name="4-1">Option 9</MenuItem>
          <MenuItem name="4-2">Option 10</MenuItem>
          <MenuItem name="4-3">Option 11</MenuItem>
          <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
    </Menu>
    </div>
</template>
<script>
export default {};
</script>
<template>
  <div id="footer">
    <div id="footer_company_info" class="footer_element">
      <div>IHS Electric</div>
      <div>ꞏ</div>
      <div>519-301-5605</div>
    </div>
    <div class="footer_element">ihselectric@yahoo.com</div>
  </div>
</template>

<script>
export default {
  name: "ContentFooter",
};
</script>

<style lang="less">
#footer {
  background-color: rgba(44, 153, 140, 0.5);
  font-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer_element {
  margin: 8px 0;
  font-size: 80%;
}

#footer_company_info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

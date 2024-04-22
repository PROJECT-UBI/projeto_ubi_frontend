<template>
  <div class="ubi-checkpage">
    <div class="ubi-banner">
      <div class="checkpage-img">
        <img src="../assets/checkPage-Baner.svg">
      </div>
    </div>
    <div class="checkpage-message">
      <div class="email-sent">
        {{ $t('checkpage.email-sent') }}
      </div>
      <div class="check-email">
        {{ $t('checkpage.check-email') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ubi-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.checkpage-img img {
  height: 112%;
  width: 112%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.checkpage-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}

.email-sent {
  font-family: $secondary-font;
  color: #000000;
  font-size: 25px;
}
.check-email {
  color: #000000;
  margin-top: 10px;
  font-size: 28px;
}
</style>
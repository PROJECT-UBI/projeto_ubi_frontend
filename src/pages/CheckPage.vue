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
    <ChooseLanguage />
    </div>
</template>

<script>
import ChooseLanguage from '../components/ChooseLanguage.vue';

export default {
    name: 'CheckPage',
    components: {
        ChooseLanguage,
    }
}
</script>

<style scoped>
.ubi-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4%;
}

.checkpage-img img{
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
    color: #000000;
    font-family: "Archivo Black", sans-serif;
    font-size: 25px;
    }

.check-email {
    color: #000000;
    margin-top: 10px;
    font-family: "Abel", sans;
    font-size: 28px;
}
</style>
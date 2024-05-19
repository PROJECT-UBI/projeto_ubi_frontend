<template>
  <div class="register-medicalRecord">
    <div class="medicalRecord-image">
      <div class="medicalRecord-imageContainer">
        <img class="image" src="../assets/form.svg">
      </div>
    </div>
    <div class="medicalRecord-form">
      <div class="ubi-title">{{ $t('medical_record_register.title') }}</div>
      <div class="ubi-subtitle">{{ $t('medical_record_register.subtitle') }}</div>
      <div v-if="!teste" class="ubi-form">
        <UbiInput
          :label="$t('medical_record_register.label_name')"
          :placeholder="$t('medical_record_register.placeholder_name')"
          type="text"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_date')"
          type="date"
        >
          <template #icon>
            <Calendar/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_cpf')"
          :placeholder="$t('medical_record_register.placeholder_cpf')"
          type="text"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_height')"
          :placeholder="$t('medical_record_register.placeholder_height')"
          type="text"
        />
        <UbiInput
          :label="$t('medical_record_register.label_weight')"
          :placeholder="$t('medical_record_register.placeholder_weight')"
          type="text"
        >
          <template #icon>
            <Hanging/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_blood_type')"
          :placeholder="$t('medical_record_register.placeholder_blood_type')"
        >
          <template #icon>
            <Drop/>
          </template>
        </UbiInput>
      </div>
      <div v-else class="ubi-form">
        <UbiInput
          :label="$t('medical_record_register.label_illnesses')"
          :placeholder="$t('medical_record_register.placeholder_illnesses')"
          type="textarea"
        />
        <UbiInput
          :label="$t('medical_record_register.label_plan')"
          :placeholder="$t('medical_record_register.placeholder_plan')"
          type="text"
        >
          <template #icon>
            <Hospital/>
          </template>
        </UbiInput>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_surgery') }}
          </span>
          <div class="ubi-radioButtons">
            <Radio
              :value="true"
              :model-value="surgery"
              :label="$t('medical_record_register.radio_yes')"
              @change="hasSurgery(true)"
            />
            <Radio
              :value="false"
              :model-value="surgery"
              :label="$t('medical_record_register.radio_no')"
              @change="hasSurgery(false)"
            />
          </div>
          <UbiInput
            v-if="surgery"
            :placeholder="$t('medical_record_register.enter_text')"
            type="textarea"
          />
        </div>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_allergy') }}
          </span>
          <div class="ubi-radioButtons">
            <Radio
              :value="true"
              :model-value="allergy"
              :label="$t('medical_record_register.radio_yes')"
              @change="hasAllergy(true)"
            />
            <Radio
              :value="false"
              :model-value="allergy"
              :label="$t('medical_record_register.radio_no')"
              @change="hasAllergy(false)"
            />
          </div>
          <UbiInput
            v-if="allergy"
            :placeholder="$t('medical_record_register.enter_text')"
            type="textarea"
          />
        </div>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_medications') }}
          </span>
          <div class="ubi-radioButtons">
            <Radio
              :value="true"
              :model-value="medications"
              :label="$t('medical_record_register.radio_yes')"
              @change="takeMedications(true)"
            />
            <Radio
              :value="false"
              :model-value="medications"
              :label="$t('medical_record_register.radio_no')"
              @change="takeMedications(false)"
            />
          </div>
          <UbiInput
            v-if="medications"
            :placeholder="$t('medical_record_register.enter_text')"
            type="textarea"
          />
        </div>
      </div>
      <div class="buttons-container">
        <div class="button">
          <UbiButton
            secondary
            :handleClick="() => nextPage()"
          >
            <template #icon>
              <Left/>
            </template>
          </UbiButton>
        </div>
        <div class="button">
          <UbiButton
            secondary
            :handleClick="() => nextPage()"
          >
            <template #icon>
              <ChevronRight/>
            </template>
          </UbiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UbiInput from '../components/Input.vue';
import UbiButton from '../components/Button.vue';
import Radio from '../components/Radio.vue';
import User from '../components/Icons/User.vue';
import Calendar from '../components/Icons/Calendar.vue';
import Hanging from '../components/Icons/Hanging.vue';
import Drop from '../components/Icons/Drop.vue';
import Hospital from '../components/Icons/Hospital.vue';
import ChevronRight from '../components/Icons/ChevronRight.vue';
import Left from '../components/Icons/Left.vue';

export default {
  components: {
    UbiInput, UbiButton, ChevronRight, Radio, User, Calendar, Hanging, Drop, Hospital, Left,
  },
  data() {
    return {
      teste: false,
      surgery: false,
      allergy: false,
      medications: false,
    };
  },
  methods: {
    nextPage() {
      this.teste = !this.teste;
    },
    hasSurgery(value) {
      this.surgery = value;
    },
    hasAllergy(value) {
      this.allergy = value;
    },
    takeMedications(value) {
      this.medications = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.register-medicalRecord {
  width: 100%;
  display: flex;
}
.medicalRecord-image {
  width: 50%;
}
.medicalRecord-imageContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  width: 80%;
  height: auto;
}
.medicalRecord-form {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8%;
  padding-right: 10%;
  box-sizing: border-box;
}
.ubi-subtitle {
  font-family: "Archivo Black", sans-serif;
  color: #6F6C6C;
  font-size: 16px;
  margin-top: 24px;
}
.ubi-form {
  width: 50%;
  height: 510px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}
.buttons-container {
  width: 80%;
  display: flex;
  justify-content: end;
  margin-top: 32px;
}
.button {
  width: 8%;
}
.ubi-radioTitle {
  font-family: "Archivo Black", sans-serif;
  font-size: 14px;
}
.ubi-radioButtons {
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

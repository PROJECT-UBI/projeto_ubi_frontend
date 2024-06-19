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
      <div v-if="step === 1" class="ubi-form">
        <UbiInput
          :label="$t('medical_record_register.label_name')"
          :placeholder="$t('medical_record_register.placeholder_name')"
          type="text"
          obligatory
          v-model="name"
          @input="getName"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_date')"
          obligatory
          type="date"
          v-model="dateBirth"
          @input="getDate"
        >
          <template #icon>
            <Calendar/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_cpf')"
          :placeholder="$t('medical_record_register.placeholder_cpf')"
          type="text"
          obligatory
          v-model="cpf"
          @input="getCPF"
        >
          <template #icon>
            <User/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_height')"
          :placeholder="$t('medical_record_register.placeholder_height')"
          type="text"
          obligatory
          v-model="height"
          @input="getHeight"
        >
          <template #icon>
            <Ruler/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_weight')"
          :placeholder="$t('medical_record_register.placeholder_weight')"
          type="text"
          obligatory
          v-model="weight"
          @input="getWeight"
        >
          <template #icon>
            <Hanging/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_blood_type')"
          :placeholder="$t('medical_record_register.placeholder_blood_type')"
          obligatory
          v-model="blood_type"
          @input="getBloodType"
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
          obligatory
          v-model="illnesses"
          @input="getIllnesses"
        >
          <template #icon>
            <Virus/>
          </template>
        </UbiInput>
        <UbiInput
          :label="$t('medical_record_register.label_plan')"
          :placeholder="$t('medical_record_register.placeholder_plan')"
          type="text"
          obligatory
          v-model="plan"
          @input="getPlan"
        >
          <template #icon>
            <Hospital/>
          </template>
        </UbiInput>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_surgery') }}
          </span>
          <span class="ubi-obligatory">*</span>
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
            v-model="descriptionSurgery"
            @input="getDescriptionSurgery"
          />
        </div>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_allergy') }}
          </span>
          <span class="ubi-obligatory">*</span>
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
            v-model="descriptionAllergy"
            @input="getDescriptionAllergy"
          />
        </div>
        <div>
          <span class="ubi-radioTitle">
            {{ $t('medical_record_register.label_medications') }}
          </span>
          <span class="ubi-obligatory">*</span>
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
            v-model="descriptionMedications"
            @input="getDescriptionMedications"
          />
        </div>
      </div>
      <div class="buttons-container">
        <div v-if="step === 2" class="button">
          <UbiButton
            secondary
            :handleClick="() => backPage()"
          >
            <template #icon>
              <Left/>
            </template>
          </UbiButton>
        </div>
        <div v-if="step !== 2" class="button">
          <UbiButton
            secondary
            :handleClick="() => nextPage()"
          >
            <template #icon>
              <ChevronRight/>
            </template>
          </UbiButton>
        </div>
        <div v-if="step === 2" class="button">
          <UbiButton
            secondary
            color="#669BBC"
            :handleClick="() => registerMedicalRecord()"
          >
            <template #icon>
              <Check/>
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
import Check from '../components/Icons/Check.vue';
import Ruler from '../components/Icons/Ruler.vue';
import Virus from '../components/Icons/Virus.vue';
import axios from 'axios';

export default {
  components: {
    UbiInput,
    UbiButton,
    ChevronRight,
    Radio,
    User,
    Calendar,
    Hanging,
    Drop,
    Hospital,
    Left,
    Check,
    Ruler,
    Virus,
  },
  data() {
    return {
      name: null,
      dateBirth: null,
      cpf: null,
      height: null,
      weight: null,
      blood_type: null,
      illnesses: null,
      plan: null,
      surgery: false,
      allergy: false,
      medications: false,
      descriptionSurgery: null,
      descriptionAllergy: null,
      descriptionMedications: null,
      step: 1,
    };
  },
  methods: {
    nextPage() {
      this.step = 2;
    },
    backPage() {
      this.step = 1;
    },
    getName(name) {
      this.name = name;
    },
    getDate(date) {
      this.dateBirth = date;
    },
    getCPF(cpf) {
      this.cpf = cpf;
    },
    getHeight(height) {
      this.height = height;
    },
    getWeight(weight) {
      this.weight = weight;
    },
    getBloodType(blood_type) {
      this.blood_type = blood_type;
    },
    getIllnesses(illnesses) {
      this.illnesses = illnesses;
    },
    getPlan(plan) {
      this.plan = plan;
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
    getDescriptionSurgery(surgery) {
      this.descriptionSurgery = surgery;
    },
    getDescriptionAllergy(allergy) {
      this.descriptionAllergy = allergy;
    },
    getDescriptionMedications(medications) {
      this.descriptionMedications = medications;
    },
    async registerMedicalRecord() {
      const token = sessionStorage.getItem('token');
      const dateObject = new Date(this.dateBirth);
      const isoDate = dateObject.toISOString().split('T')[0];
      try {
        const response = await axios({
          method: 'post',
          url: 'http://ubi-backend.test/api/medicalRecord',
          data: {
            name: this.name,
            birth: isoDate,
            height: parseInt(this.weight),
            weight: parseInt(this.weight),
            blood_type: this.blood_type,
            allergies: this.descriptionAllergy,
            medications: this.descriptionMedications,
            diseases: this.illnesses,
            surgeries: this.descriptionSurgery,
          },
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': true,
          },
        });
        return response;
      } catch (error) {
        this.error = error.response.data.message;
        return this.error;
      }
    }
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
  gap: 24px;
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
.ubi-obligatory {
  color: #780000;
}
</style>

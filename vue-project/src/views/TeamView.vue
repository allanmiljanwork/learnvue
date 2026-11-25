<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()

team.fill()

let showModal = ref(true)
</script>

<template>
  <TeamHeader @add="showmodal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal :show="showModal" @close="showModal = false">
    <template #defualt>
      <p>Need to add a new member to your team?</p>

      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email Address..." class="flex-1" />
          <button>Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>

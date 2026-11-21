export default {
  template: `
    <form @submit.prevent="add">
              <div class="border border-gray-600">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
                <button type="submit" class="p-2 border-l">Add</button>
            </div>
          </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", newAssignment);
      this.newAssignment = "";
    },
  },
};

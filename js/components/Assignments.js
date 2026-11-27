import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <section class="flex gap-8">
      <assignment-list
        :assignments="filters.inProgress"
        title="In Progress"
        @complete-change="updateComplete"
      >
        <assignment-create @add="add"></assignment-create>
      </assignment-list>

      <div v-show="showCompleted">
        <assignment-list
          :assignments="filters.completed"
          title="Completed"
          can-toggle
          @complete-change="updateComplete"
          @toggle="showCompleted = !showCompleted"
        ></assignment-list>
      </div>
    </section>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete,
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
  },

  methods: {
    async add(name) {
      const response = await fetch("http://localhost:3001/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, complete: false }),
      });

      this.assignments.push(await response.json());
    },

    async updateComplete(assignment, complete) {
      await fetch(`http://localhost:3001/assignments/${assignment.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete }),
      });

      assignment.complete = complete;
    },
  },
};

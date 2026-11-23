import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{assignments.length}})</span>
            </h2>

           <assignment-tags
           :init-tags="assignments.map(a => a.tag)"
           :curr-tag="currTag" 
           @change="currTag = $event"
           />

            <ul class="mt-6">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currTag);
    },
  },
};

export default {
  template: `
        <li>
            <label>
                {{ assignment.name }}
                <input
                    type="checkbox"
                    :checked="assignment.complete"
                    @change="$emit('complete-change', $event.target.checked)"
                >
            </label>
        </li> 
    `,

  props: {
    assignment: Object,
  },
};

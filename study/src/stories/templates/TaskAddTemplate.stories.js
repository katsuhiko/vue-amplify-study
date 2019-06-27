import { storiesOf } from '@storybook/vue'
import layout from '../../components/templates/StoryTemplateLayout'
import TaskAddTemplate from '../../components/templates/TaskAddTemplate.vue'

storiesOf('templates/task-add-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { TaskAddTemplate },
    template: `<task-add-template></task-add-template>`
  }))

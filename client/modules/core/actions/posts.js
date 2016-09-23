export default {
  create({Meteor, LocalState, FlowRouter}, tag, content, priority) {
    LocalState.set('SAVING_ERROR', null);
    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', id, tag, content, priority, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  },

  remove({Meteor, FlowRouter}, idTask){
    console.log('post.js remove w action');
    const id = Meteor.uuid();
    Meteor.call('posts.remove', id, idTask, (err) => {
      if (err) {
        console.error(err);
      }
    });
    FlowRouter.go('/');
  },

  done({Meteor}, idTask){
    const id = Meteor.uuid();
    Meteor.call('posts.done', id, idTask, (err) => {
      if (err) {
        console.error(err);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },

  createCat({Meteor}, name, color) {
    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.createCat', id, name, color, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

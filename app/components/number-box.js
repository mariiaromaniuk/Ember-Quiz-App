import Component from '@ember/component';

export default class NumberBoxComponent extends Component {
  
  // Set animation after element attached to DOM
  didInsertElement() {
    this.$('.card').addClass('bounce');
    this.$('.card').on('animationend', () => {
      this.$('.card').removeClass('bounce');
    });
  }
}

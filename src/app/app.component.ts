import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'CAR';
  answer = '';
  genders = ['Male', 'Fe-male', 'Not-to Prefer'];
  user = {
    USERNAME: '',
    EMAIL: '',
    GENDER: '',
    SECRETQUESTION: '',
    ANSWER: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Online User';
    // this.signUpForm.setValue({
    //   userData: {
    //     UserName: suggestedName,
    //     EMail: 'Fe@male.com',
    //     },
    //   Gender: 'Fe-male',
    //   Secret: 'CAR',
    //   QuestionAnswer: 'Po ra Pandi'
    // }); not good pre loading em.
    this.signUpForm.form.patchValue({
      userData: {
        UserName: suggestedName
      }
    });
  }
    // onSubmit(form: NgForm) {
    //   console.log('Form Submitted!', form);
    // }

    //tested for SourceTree
  onSubmit() {
    // console.log(this.signUpForm);
    this.submitted = true;
    this.user.USERNAME = this.signUpForm.value.userData.UserName;
    this.user.EMAIL = this.signUpForm.value.userData.EMail;
    this.user.GENDER = this.signUpForm.value.Gender;
    this.user.SECRETQUESTION = this.signUpForm.value.Secret;
    this.user.ANSWER = this.signUpForm.value.QuestionAnswer;
    this.signUpForm.reset();
  }
}

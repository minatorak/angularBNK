import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlValidator } from '../../validators/url-validator';

@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.component.html',
  styleUrls: ['./member-information.component.css']
})
export class MemberInformationComponent implements OnInit {

  member: Member;
  editInformationForm: FormGroup;
  id: string;

  constructor(
    private formbuild: FormBuilder,
    private route: ActivatedRoute,
    private bnkService: BnkService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('Id');
    this.bnkService.informationMember(this.id).subscribe(data => {
      this.member = data;
      this.editInformationForm  = this.formbuild.group({
        _id: [data._id, Validators.required],
        name: [data.name, Validators.required],
        imgUrl: [data.imgUrl, [Validators.required, UrlValidator.Validate]],
        instagramId: [data.instagramId, Validators.required]
      });
      // this.editInformationForm = this.formbuild.group(data);
    });
  }

  reset() {
    this.editInformationForm.reset(this.member);
  }

  submitInformation() {
    if (this.editInformationForm.valid) {
      this.bnkService.pathinformationMember(this.id, this.editInformationForm.value)
                     .subscribe(data => this.router.navigate(['/admin']));
    } else {
      alert('เฮ้ย ');
      console.log(this.editInformationForm.get('imgUrl').getError('url'));
    }
  }
}

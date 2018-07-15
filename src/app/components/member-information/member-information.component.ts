import { Member } from './../../models/member';
import { BnkService } from './../../services/bnk.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.component.html',
  styleUrls: ['./member-information.component.css']
})
export class MemberInformationComponent implements OnInit {
  member: Member;
  editInformationForm: FormGroup;
  constructor(private formbuild: FormBuilder,
              private route: ActivatedRoute,
              private bnkService: BnkService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('Id');
    this.bnkService.informationMember(id).subscribe(data => {
      this.member = data;
      this.editInformationForm = this.formbuild.group(data);
    });
  }

  reset() {
    this.editInformationForm.reset(this.member);
  }
}

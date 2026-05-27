import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jhi-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export default class Footer {}

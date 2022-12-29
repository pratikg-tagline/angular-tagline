import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsclientService {
  words={
    clienteletitle: 'Words From Our Clientele',
      clienteledescription1:
        'Good things come for those who work hard, and thats why our clientele appreciate our efforts. Tagline Infotech provides the best services to its clients, and it is reflected through our ratings and reviewson various platforms.',
      clienteledescription2:
      'We are a well-known IT services company on Clutch. Check out what our customers have to say about ourservices. Read their ratings, feedback, and stories about partnering with us before making your own decision.',
  }
  constructor() { }
}

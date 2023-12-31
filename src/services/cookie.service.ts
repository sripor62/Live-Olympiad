interface CookieStore{
  [key:string]:string
}
export class CookiesService {
  private cookieStore:CookieStore = {};

  constructor(private readonly req: any) {
    if (this.req !== null) {
      this.parseCookies(this.req.cookies);
    } else {
      this.parseCookies(document.cookie);
    }
  }

  public parseCookies(cookies:any) {
    this.cookieStore = {};
    if (!!cookies === false) {
      return;
    }
    const cookiesArr = cookies.split(";");
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split("=");
      this.cookieStore[cookieArr[0]] = cookieArr[1];
    }
  }

  get(key: string) {
    return !!this.cookieStore[key] ? this.cookieStore[key] : null;
  }
}

// const customCookies= new CookiesService()

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: 'v1.2 testing',
  apiAuthUrl: 'http://authapi?/api/',
  auth: false,
  portalName: 'New Portal',
  sites: {
    Name: 'Home',
    Path: '',
    Children: [
      {
        Name: 'New Top Gun',
        Icon: 'fa-list-alt',
        Path: 'http://wb001502.rwest.local/#/login',
        Order: 0,
        Visible: true,
        RequiredPrivilege: 'Topgun.view',
        Children: null
      },
      {
        Name: 'Top Gun',
        Icon: 'fa-desktop',
        Path: null,
        Order: 0,
        Visible: true,
        RequiredPrivilege: 'Oldtopgun',
        Children: [
          {
            Name: 'Test',
            Path: 'http://wb001502.rwest.local:8080/topgun',
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Oldtopgun.test',
            Children: null
          },
          {
            Name: 'Prod',
            Path: 'http://wn000280.rwest.local/topgun',
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Oldtopgun.prod',
            Children: null
          }
        ]
      }
    ]
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

# Aportal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This Portal is using meta-spa-router for global routes and a dynamic-iframe strategy to load apps inside. You can include apps from different techonologies even if you are using routing there is not a problem this implementation.

### Home 
![picture](c1.PNG?raw=true 'Home')

### Is possible to split apps

![picture](c2.PNG?raw=true 'Split')


### If you need to activate auth-option, the default structure for privileges is the following:

```json
{
  "User": {
    "Name": "Random user",
    "Id": "Random"
  },
  "Privileges": [
    {
      "Id": 24,
      "Name": "Checklist.STO.View",
      "Description": "Dummy description"
    },
    {
      "Id": 15,
      "Name": "Tariff.Operator.View",
      "Description": "Dummy description"
    }
  ]
}
```
- When you activate auth option the service has to response with privileges, the portal is going to merge the sites that you defined previusly with the privileges from the auth service.

### The portal uses a merge strategy for permits, you can change it in menu.service.ts

#### It allows up to 2 nested levels deep. Menu>Sub Menu

```typescript
...
  mergePermitsMenu(privileges: Privileges[], menu: Menu[]): Menu[] {
    const filter = this.filterMenu(this.filterParents.bind(this), this.filterChildren.bind(this));
    return filter(privileges, menu);
  }

  filterMenu = (p, c) => (priv, menu) => c(priv, p(priv, menu));

  getPermits(): Observable<Authorization> {
    return this.apiService.get().pipe(map(data => data));
  }

  findPrivilege(privileges: Privileges[], menuPrivilege: string): boolean {
    if (!privileges) {
      return false;
    }
    return privileges.find(privilege => privilege.Name === menuPrivilege) ? true : false;
  }

  filterParents(privileges: Privileges[], menu: Menu[]): Menu[] {
    return menu.filter(item => {
      return (
        this.findPrivilege(privileges, item.RequiredPrivilege) ||
        (item.Children
          ? item.Children.find(child => this.findPrivilege(privileges, child.RequiredPrivilege))
          : false)
      );
    });
  }

  filterChildren(privileges: Privileges[], menu: Menu[]) {
    return menu.map(item => {
      item.Children = item.Children
        ? item.Children.filter(child => this.findPrivilege(privileges, child.RequiredPrivilege))
        : null;
      return item;
    });
  }


```

### environment config sites:

- Icons are from font awesome >5


```json
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

```

## CSSs, LOGOs, HTMLs are easly customizable

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

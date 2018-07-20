// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: 'v1.2 testing',
  apiAuthUrl: 'http://wn000214.rwest.local:51350/api/',
  sites: {
    Name: 'Home',
    Icon: 'fa-home',
    Path: 'http://madportal/app/home',
    Order: 0,
    Visible: true,
    RequiredPrivilege: null,
    Children: [
      {
        Name: 'Positions',
        Icon: 'fa-list-alt',
        Path: 'http://madportal/app/home',
        Order: 0,
        Visible: true,
        RequiredPrivilege: 'Positions.View',
        Children: null
      },
      {
        Name: 'Flipbook',
        Icon: 'fa-desktop',
        Path: 'http://localhost:4201/',
        Order: 1,
        Visible: true,
        RequiredPrivilege: 'Positions.View',
        Children: null
      },
      {
        Name: 'Optimisation',
        Icon: 'fa-thumbs-up',
        Path: null,
        Order: 2,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Valuations',
            Icon: null,
            Path: 'http://madportal/app/optimisation/valuation',
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Optimisation.Valuations.View',
            Children: null
          },
          {
            Name: 'Expert View',
            Icon: null,
            Path: 'http://madportal/app/optimisation/expert',
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Optimisation.Expert.View',
            Children: null
          },
          {
            Name: 'Results',
            Icon: null,
            Path: 'http://madportal/app/optimisation/results',
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Optimisation.Results.View',
            Children: null
          },
          {
            Name: 'Portfolio View',
            Icon: null,
            Path: null,
            Order: 3,
            Visible: true,
            RequiredPrivilege: 'Optimisation.Portfolio.View',
            Children: null
          },
          {
            Name: 'Static Data',
            Icon: null,
            Path: null,
            Order: 4,
            Visible: true,
            RequiredPrivilege: 'Optimisation.StaticData.View',
            Children: null
          },
          {
            Name: 'Hurdles',
            Icon: null,
            Path: null,
            Order: 5,
            Visible: true,
            RequiredPrivilege: 'Optimisation.Hurdles.View',
            Children: null
          }
        ]
      },
      {
        Name: 'MIDAS',
        Icon: 'fa-euro-sign',
        Path: null,
        Order: 3,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Strike Prices',
            Icon: null,
            Path: 'http://localhost:4202/',
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Midas.StrikePrice.View',
            Children: null
          },
          {
            Name: 'Expert View',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Midas.Expert.View',
            Children: null
          },
          {
            Name: 'Static Data',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Midas.Stadix.View',
            Children: null
          }
        ]
      },
      {
        Name: 'PnL',
        Icon: 'fa-euro-sign',
        Path: null,
        Order: 4,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Detail',
            Icon: null,
            Path: null,
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'PnL.Detail.View',
            Children: null
          },
          {
            Name: 'Graph',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'PnL.Graph.View',
            Children: null
          }
        ]
      },
      {
        Name: 'Tariff',
        Icon: 'fa-euro-sign',
        Path: null,
        Order: 5,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Map',
            Icon: null,
            Path: null,
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Tariff.Map.View',
            Children: null
          },
          {
            Name: 'Operator',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Tariff.Operator.View',
            Children: null
          },
          {
            Name: 'Formula',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Tariff.Formula.View',
            Children: null
          },
          {
            Name: 'Static Data',
            Icon: null,
            Path: null,
            Order: 3,
            Visible: true,
            RequiredPrivilege: 'Tariff.StaticData.View',
            Children: null
          }
        ]
      },
      {
        Name: 'Maintenance',
        Icon: 'fa-wrench',
        Path: null,
        Order: 6,
        Visible: true,
        RequiredPrivilege: 'Maintenance.View',
        Children: null
      },
      {
        Name: 'Checklist',
        Icon: 'fa-check-circle',
        Path: null,
        Order: 7,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'STO',
            Icon: null,
            Path: 'http://localhost:4200',
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Checklist.STO.View',
            Children: null
          },
          {
            Name: 'Dispatch',
            Icon: null,
            Path: 'http://localhost:4200/Embedded%20IT',
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Checklist.Dispatch.View',
            Children: null
          },
          {
            Name: 'STT',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Checklist.STT.View',
            Children: null
          },
          {
            Name: 'Embedded IT',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Checklist.Embedded.View',
            Children: null
          },
          {
            Name: 'LTT',
            Icon: null,
            Path: null,
            Order: 3,
            Visible: true,
            RequiredPrivilege: 'Checklist.LTT.View',
            Children: null
          }
        ]
      },
      {
        Name: 'Configuration',
        Icon: 'fa-cogs',
        Path: null,
        Order: 8,
        Visible: true,
        RequiredPrivilege: 'Configuration.View',
        Children: null
      },
      {
        Name: 'Retail',
        Icon: 'fa-sitemap',
        Path: null,
        Order: 9,
        Visible: true,
        RequiredPrivilege: 'Retail.Overview.View',
        Children: [
          {
            Name: 'Overview',
            Icon: null,
            Path: null,
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Retail.Overview.View',
            Children: null
          },
          {
            Name: 'Controls',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Retail.Controls.View',
            Children: null
          },
          {
            Name: 'Czech Price Demands',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Retail.ChechPriceDemands.View',
            Children: null
          }
        ]
      },
      {
        Name: 'Curves',
        Icon: 'fa-chart-line',
        Path: null,
        Order: 10,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Overview',
            Icon: null,
            Path: null,
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'Market.Overview.View',
            Children: null
          },
          {
            Name: 'Curve Enhancement',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'Market.Afterburner.View',
            Children: null
          },
          {
            Name: 'Indexfixing Configuration',
            Icon: null,
            Path: null,
            Order: 2,
            Visible: true,
            RequiredPrivilege: 'Market.Idefix.View',
            Children: null
          },
          {
            Name: 'Historical Parameters',
            Icon: null,
            Path: null,
            Order: 3,
            Visible: true,
            RequiredPrivilege: 'Rubicon.View',
            Children: null
          }
        ]
      },
      {
        Name: 'SOS Jobs',
        Icon: 'fa-spinner',
        Path: null,
        Order: 11,
        Visible: true,
        RequiredPrivilege: 'SosJobs.View',
        Children: null
      },
      {
        Name: 'Stored Queries',
        Icon: 'fa-database',
        Path: null,
        Order: 12,
        Visible: true,
        RequiredPrivilege: 'StoredQuery.View',
        Children: null
      },
      {
        Name: 'Data and Reporting',
        Icon: 'fa-book',
        Path: null,
        Order: 13,
        Visible: true,
        RequiredPrivilege: null,
        Children: [
          {
            Name: 'Overview',
            Icon: null,
            Path: null,
            Order: 0,
            Visible: true,
            RequiredPrivilege: 'DateAndReporting.Overview.View',
            Children: null
          },
          {
            Name: 'Endur Uploader',
            Icon: null,
            Path: null,
            Order: 1,
            Visible: true,
            RequiredPrivilege: 'DateAndReporting.EndurUploader.View',
            Children: null
          }
        ]
      },
      {
        Name: 'Stragegy',
        Icon: 'fa-chart-area',
        Path: null,
        Order: 14,
        Visible: true,
        RequiredPrivilege: 'Strategy.View',
        Children: null
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

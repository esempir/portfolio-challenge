import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
  value: string;
}

export interface Item2 {
  name: string;
  value: string;
  isBold: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  key_facts: Item[] = [
    {
      name: 'Fund Launch Date',
      value: '7/13/2018'
    },
    {
      name: 'Expense Ratio',
      value: '0.31%'
    },
    {
      name: 'Benchmark',
      value: '50% S&P 500 Index / 50% MSCI Emerging Markets Index'
    },
    {
      name: 'Tax Cost Ratio',
      value: '0.87%'
    },
    {
      name: 'Distribution Yield',
      value: '2.44%'
    }
  ];

  regions: Item2[] = [
    {
      name: 'Americas',
      value: '58.79',
      isBold: true
    },
    {
      name: 'North America',
      value: '56.99',
      isBold: false
    },
    {
      name: 'Latin America',
      value: '1.80',
      isBold: false
    },
    {
      name: 'Greater Europe',
      value: '2.36',
      isBold: true
    },
    {
      name: 'Europe Emerging',
      value: '0.91',
      isBold: false
    },
    {
      name: 'Europe Developed',
      value: '0.17',
      isBold: false
    },
    {
      name: 'Africa/Middle East',
      value: '1.28',
      isBold: false
    },
    {
      name: 'Greater Asia',
      value: '38.44',
      isBold: true
    },
    {
      name: 'Asia Emerging',
      value: '13.80',
      isBold: false
    },
    {
      name: 'Australasia',
      value: '3.15',
      isBold: false
    },
    {
      name: 'Asia Developed',
      value: '10.04',
      isBold: false
    },
    {
      name: 'Japan',
      value: '11.45',
      isBold: false
    },
    {
      name: 'Unknown',
      value: '0.41',
      isBold: true
    },
    {
      name: 'Total',
      value: '100',
      isBold: true
    }
  ];

  allocations: Item2[] = [
    {
      name: 'U.S. Equities',
      value: '50.12',
      isBold: false
    },
    {
      name: 'Non-U.S. Equities',
      value: '37.46',
      isBold: false
    },
    {
      name: 'U.S. Fixed Income',
      value: '9.13',
      isBold: false
    },
    {
      name: 'Non-U.S. Fixed Income',
      value: '2.00',
      isBold: false
    },
    {
      name: 'Cash',
      value: '1.03',
      isBold: false
    },
    {
      name: 'Other',
      value: '0.26',
      isBold: false
    },
    {
      name: 'Total',
      value: '100',
      isBold: true
    }
  ];

  sectors: Item2[] = [
    {
      name: 'Technology',
      value: '20.18',
      isBold: false
    },
    {
      name: 'Real Estate',
      value: '19.57',
      isBold: false
    },
    {
      name: 'Financial Services',
      value: '17.67',
      isBold: false
    },
    {
      name: 'Utilities',
      value: '9.60',
      isBold: false
    },
    {
      name: 'Consumer Cyclical',
      value: '7.44',
      isBold: false
    },
    {
      name: 'Industrials',
      value: '6.67',
      isBold: false
    },
    {
      name: 'Basic Materials',
      value: '5.09',
      isBold: false
    },
    {
      name: 'Healthcare',
      value: '4.63',
      isBold: false
    },
    {
      name: 'Consumer Defensive ',
      value: '3.48',
      isBold: false
    },
    {
      name: 'Communication Services ',
      value: '3.31',
      isBold: false
    },
    {
      name: 'Energy',
      value: '1.96',
      isBold: false
    },
    {
      name: 'Unknown',
      value: '0.40',
      isBold: false
    },
    {
      name: 'Total',
      value: '100',
      isBold: true
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

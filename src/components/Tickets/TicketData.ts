// Define the structure of a Ticket object

export interface Ticket {
    ticketId: string;
    status: string;
    title: string;
    content: string;
    priority: string;
    createdAt: Date;
    typeOfTicket: string;
  }
  
  // Array of ticket arrays, each sub-array represents a group of tickets

  export const ticketData: Ticket[][] = [
    [
        // Open tickets array (status: Open)
      {
        ticketId: 'T12345',
        status: 'Open',
        title: 'Example Open Ticket 1',
        content: 'This is an example open ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      },
      {
        ticketId: 'T12345',
        status: 'Open',
        title: 'Example Open Ticket 1',
        content: 'This is an example open ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      },     {
        ticketId: 'T12345',
        status: 'Open',
        title: 'Example Open Ticket 1',
        content: 'This is an example open ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      },
    ],
       // Closed tickets array (status: Closed)
    [
      {
        ticketId: 'T24680',
        status: 'Closed',
        title: 'Example Closed Ticket 1',
        content: 'This is an example closed ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      },
      {
        ticketId: 'T24680',
        status: 'Closed',
        title: 'Example Closed Ticket 1',
        content: 'This is an example closed ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      },  {
        ticketId: 'T24680',
        status: 'Closed',
        title: 'Example Closed Ticket 1',
        content: 'This is an example closed ticket 1.',
        priority: 'High',
        typeOfTicket: 'Delivery',
        createdAt: new Date(),
      }, 
    ],

    // Paused tickets array (status: Paused)
    
    [
        {
            ticketId: 'T13579',
            status: 'Paused',
            title: 'Example Paused Ticket 1',
            content: 'This is an example paused ticket 1.',
            priority: 'Medium',
            typeOfTicket: 'Restaurant',
            createdAt: new Date(),
          }, {
            ticketId: 'T13579',
            status: 'Paused',
            title: 'Example Paused Ticket 1',
            content: 'This is an example paused ticket 1.',
            priority: 'Medium',
            typeOfTicket: 'Restaurant',
            createdAt: new Date(),
          }, {
            ticketId: 'T13579',
            status: 'Paused',
            title: 'Example Paused Ticket 1',
            content: 'This is an example paused ticket 1.',
            priority: 'Medium',
            typeOfTicket: 'Restaurant',
            createdAt: new Date(),
          },
      // Add more paused tickets if needed
    ],
  ];
  
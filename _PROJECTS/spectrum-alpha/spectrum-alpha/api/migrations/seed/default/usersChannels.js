// @flow
const constants = require('./constants');
const {
  DATE,
  BRIAN_ID,
  MAX_ID,
  BRYN_ID,
  BLOCKED_USER_ID,
  PREVIOUS_MEMBER_USER_ID,
  CHANNEL_MODERATOR_USER_ID,
  COMMUNITY_MODERATOR_USER_ID,
  SINGLE_CHANNEL_COMMUNITY_USER_ID,
  SPECTRUM_GENERAL_CHANNEL_ID,
  PRIVATE_GENERAL_CHANNEL_ID,
  SPECTRUM_ARCHIVED_CHANNEL_ID,
  SPECTRUM_PRIVATE_CHANNEL_ID,
  DELETED_COMMUNITY_DELETED_CHANNEL_ID,
  PAYMENTS_GENERAL_CHANNEL_ID,
  PAYMENTS_PRIVATE_CHANNEL_ID,
  PAYMENTS_FEATURES_CHANNEL_ID,
  MODERATOR_CREATED_CHANNEL_ID,
  SINGLE_CHANNEL_COMMUNITY_GENERAL_CHANNEL_ID,
} = constants;

module.exports = [
  {
    id: '1',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '2',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '3',
    createdAt: new Date(DATE),
    userId: BRYN_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '4',
    createdAt: new Date(DATE),
    userId: BLOCKED_USER_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: false,
    isBlocked: true,
    isPending: false,
    receiveNotifications: true,
  },

  {
    id: '5',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '6',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '7',
    createdAt: new Date(DATE),
    userId: BRYN_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '8',
    createdAt: new Date(DATE),
    userId: BLOCKED_USER_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: false,
    isBlocked: true,
    isPending: false,
    receiveNotifications: true,
  },

  {
    id: '9',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '10',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '32',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: PAYMENTS_FEATURES_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '11',
    createdAt: new Date(DATE),
    userId: BRYN_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '12',
    createdAt: new Date(DATE),
    userId: BLOCKED_USER_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: false,
    isBlocked: true,
    isPending: false,
    receiveNotifications: true,
  },

  {
    id: '13',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '14',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '15',
    createdAt: new Date(DATE),
    userId: BRYN_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '16',
    createdAt: new Date(DATE),
    userId: BLOCKED_USER_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: false,
    isBlocked: true,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '17',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: SPECTRUM_ARCHIVED_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '18',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: true,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '19',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: SPECTRUM_ARCHIVED_CHANNEL_ID,
    isOwner: false,
    isModerator: true,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '20',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: true,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '21',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: true,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '22',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: true,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '23',
    createdAt: new Date(DATE),
    userId: CHANNEL_MODERATOR_USER_ID,
    channelId: MODERATOR_CREATED_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },

  {
    id: '24',
    createdAt: new Date(DATE),
    userId: COMMUNITY_MODERATOR_USER_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '25',
    createdAt: new Date(DATE),
    userId: COMMUNITY_MODERATOR_USER_ID,
    channelId: SPECTRUM_ARCHIVED_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '26',
    createdAt: new Date(DATE),
    userId: COMMUNITY_MODERATOR_USER_ID,
    channelId: SPECTRUM_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '27',
    createdAt: new Date(DATE),
    userId: COMMUNITY_MODERATOR_USER_ID,
    channelId: PAYMENTS_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '28',
    createdAt: new Date(DATE),
    userId: COMMUNITY_MODERATOR_USER_ID,
    channelId: PAYMENTS_PRIVATE_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '29',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: DELETED_COMMUNITY_DELETED_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: true,
  },
  {
    id: '30',
    createdAt: new Date(DATE),
    userId: PREVIOUS_MEMBER_USER_ID,
    channelId: SPECTRUM_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: false,
    isBlocked: false,
    isPending: false,
    receiveNotifications: false,
  },
  {
    id: '31',
    createdAt: new Date(DATE),
    userId: MAX_ID,
    channelId: PRIVATE_GENERAL_CHANNEL_ID,
    isOwner: true,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: false,
  },
  {
    id: '33',
    createdAt: new Date(DATE),
    userId: BRIAN_ID,
    channelId: SINGLE_CHANNEL_COMMUNITY_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: false,
  },
  {
    id: '34',
    createdAt: new Date(DATE),
    userId: SINGLE_CHANNEL_COMMUNITY_USER_ID,
    channelId: SINGLE_CHANNEL_COMMUNITY_GENERAL_CHANNEL_ID,
    isOwner: false,
    isModerator: false,
    isMember: true,
    isBlocked: false,
    isPending: false,
    receiveNotifications: false,
  },
];
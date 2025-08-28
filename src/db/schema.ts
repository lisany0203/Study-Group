import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const groups = pgTable('groups', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  creatorId: serial('creator_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const groupMembers = pgTable('group_members', {
    id: serial('id').primaryKey(),
    userId: serial('user_id').notNull().references(() => users.id),
    groupId: serial('group_id').notNull().references(() => groups.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tasks = pgTable('tasks', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    groupId: serial('group_id').notNull().references(() => groups.id),
    assignedToId: serial('assigned_to_id').notNull().references(() => users.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
    groups: one(groups, {
        fields: [users.id],
        references: [groups.creatorId],
    }),
    groupMemberships: many(groupMembers),
    tasks: many(tasks),
}));

export const groupsRelations = relations(groups, ({ one, many }) => ({
    creator: one(users, {
        fields: [groups.creatorId],
        references: [users.id],
    }),
    members: many(groupMembers),
    tasks: many(tasks),
}));

export const groupMembersRelations = relations(groupMembers, ({ one }) => ({
    group: one(groups, {
        fields: [groupMembers.groupId],
        references: [groups.id],
    }),
    user: one(users, {
        fields: [groupMembers.userId],
        references: [users.id],
    }),
}));

export const tasksRelations = relations(tasks, ({ one }) => ({
    group: one(groups, {
        fields: [tasks.groupId],
        references: [groups.id],
    }),
    assignee: one(users, {
        fields: [tasks.assignedToId],
        references: [users.id],
    }),
}));

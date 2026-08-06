import type { Meta, StoryObj } from '@storybook/react-vite';
import AuthCardLayout from '@/components/auth-card-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof AuthCardLayout> = {
    title: 'Layouts/AuthCardLayout',
    component: AuthCardLayout,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Log in',
        description: 'Enter your email and password to log in.',
        children: (
            <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button className="w-full">Log in</Button>
            </div>
        ),
    },
};

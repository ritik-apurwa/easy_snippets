"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section>
      <Card>

        
        <CardTitle>Login to Continue</CardTitle>
        <CardContent>
          <CardDescription>here goes description</CardDescription>
          <form>
            <Input
              disabled={false}
              value=""
              onChange={() => {}}
              required
              autoComplete="true"
              placeholder="enter your email"
              type="email"
            />
            <Input
              disabled={false}
              value=""
              onChange={() => {}}
              required
              autoComplete="true"
              placeholder="enter your password"
              type="password"
            />
            <Button variant="default" size="default">
              Continue
            </Button>  
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
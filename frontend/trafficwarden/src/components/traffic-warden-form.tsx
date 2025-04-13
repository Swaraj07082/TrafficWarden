"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  duration: z.string({
    required_error: "Field is required",
  }),
  protocol_type: z.string({
    required_error: "Field is required",
  }),
  service: z.string({
    required_error: "Field is required",
  }),
  flag: z.string({
    required_error: "Field is required",
  }),
  src_bytes: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_bytes: z.coerce.number({
    required_error: "Field is required",
  }),
  land: z.coerce.number({
    required_error: "Field is required",
  }),
  wrong_fragment: z.coerce.number({
    required_error: "Field is required",
  }),
  urgent: z.coerce.number({
    required_error: "Field is required",
  }),
  hot: z.coerce.number({
    required_error: "Field is required",
  }),
  num_failed_logins: z.coerce.number({
    required_error: "Field is required",
  }),
  logged_in: z.coerce.number({
    required_error: "Field is required",
  }),
  num_compromised: z.coerce.number({
    required_error: "Field is required",
  }),
  root_shell: z.coerce.number({
    required_error: "Field is required",
  }),
  su_attempted: z.coerce.number({
    required_error: "Field is required",
  }),
  num_root: z.coerce.number({
    required_error: "Field is required",
  }),
  num_file_creations: z.coerce.number({
    required_error: "Field is required",
  }),
  num_shells: z.coerce.number({
    required_error: "Field is required",
  }),
  num_access_files: z.coerce.number({
    required_error: "Field is required",
  }),
  num_outbound_cmds: z.coerce.number({
    required_error: "Field is required",
  }),
  is_host_login: z.coerce.number({
    required_error: "Field is required",
  }),
  is_guest_login: z.coerce.number({
    required_error: "Field is required",
  }),
  count: z.coerce.number({
    required_error: "Field is required",
  }),
  srv_count: z.coerce.number({
    required_error: "Field is required",
  }),
  serror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  srv_serror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  rerror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  srv_rerror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  same_srv_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  diff_srv_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  srv_diff_host_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_count: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_srv_count: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_same_srv_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_diff_srv_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_same_src_port_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_srv_diff_host_rate: z.coerce.number({
    required_error: "Field is required",
  }),

  dst_host_serror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_srv_serror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_rerror_rate: z.coerce.number({
    required_error: "Field is required",
  }),

  dst_host_srv_rerror_rate: z.coerce.number({
    required_error: "Field is required",
  }),
});

interface formDataType {
  duration: string;
  protocol_type: string;
  service: string;
  flag: string;
  src_bytes: number;
  dst_bytes: number;
  land: number;
  wrong_fragment: number;
  urgent: number;
  hot: number;
  num_failed_logins: number;
  logged_in: number;
  num_compromised: number;
  root_shell: number;
  su_attempted: number;
  num_root: number;
  num_file_creations: number;
  num_shells: number;
  num_access_files: number;
  num_outbound_cmds: number;
  is_host_login: number;
  is_guest_login: number;
  count: number;
  srv_count: number;
  serror_rate: number;
  srv_serror_rate: number;
  rerror_rate: number;
  srv_rerror_rate: number;
  same_srv_rate: number;
  diff_srv_rate: number;
  srv_diff_host_rate: number;
  dst_host_count: number;
  dst_host_srv_count: number;
  dst_host_same_srv_rate: number;
  dst_host_diff_srv_rate: number;
  dst_host_same_src_port_rate: number;
  dst_host_srv_diff_host_rate: number;
  dst_host_serror_rate: number;
  dst_host_srv_serror_rate: number;
  dst_host_rerror_rate: number;
  dst_host_srv_rerror_rate: number;
}
export default function TrafficWardenForm() {
  const [FormData, setFormData] = useState<formDataType>();
  const [Prediction, setPrediction] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      src_bytes: 0,
      dst_bytes: 0,
      // duration: "",
      service: "http",
      dst_host_count: 0,
      dst_host_srv_count: 0,
      count: 0,
      srv_count: 0,
      num_failed_logins: 0,
      num_compromised: 0,
      num_root: 0,
      num_file_creations: 0,
      num_shells: 0,
      num_access_files: 0,
      num_outbound_cmds: 0,
      serror_rate: 0,
      srv_serror_rate: 0,
      rerror_rate: 0,
      srv_rerror_rate: 0,
      dst_host_same_srv_rate: 0,
      dst_host_diff_srv_rate: 0,
      dst_host_same_src_port_rate: 0,
      dst_host_srv_diff_host_rate: 0,
      dst_host_serror_rate: 0,
      dst_host_srv_serror_rate: 0,
      dst_host_rerror_rate: 0,
      dst_host_srv_rerror_rate: 0,
      same_srv_rate: 0,
      diff_srv_rate: 0,
      srv_diff_host_rate: 0,
      land: 0,
      wrong_fragment: 0,
      urgent: 0,
      hot: 0,
      logged_in: 0,
      root_shell: 0,
      su_attempted: 0,
      is_host_login: 0,
      is_guest_login: 0,
    },
  });

  async function postdata(data: formDataType) {
    try {
      const response = await fetch("https://trafficwarden.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setPrediction(result.prediction);
      console.log("prediction" + Prediction);
      alert(`${result.prediction}`);

      return Prediction;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form data submitted:", values);
    setFormData(values);

    postdata(values);

    alert("Data submitted successfully");
  };

  console.log("this is state", FormData);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4 w-full max-md:hidden ">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="host">Host Metrics</TabsTrigger>
            <TabsTrigger value="service">Service Metrics</TabsTrigger>
            <TabsTrigger value="security">Security Flags</TabsTrigger>
          </TabsList>

          <TabsList className="grid grid-cols-3 mb-4 w-full md:hidden ">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="host">Host Metrics</TabsTrigger>
           
          </TabsList>

          <TabsList className=" grid grid-cols-2 mb-4 w-full md:hidden">
          <TabsTrigger value="service">Service Metrics</TabsTrigger>
          <TabsTrigger value="security">Security Flags</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Metrics</CardTitle>
                <CardDescription>
                  Enter the fundamental traffic metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="src_bytes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>src_bytes</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter source bytes"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="dst_bytes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter destination bytes</FormLabel>
                          <FormControl>
                            <Input placeholder="dst_bytes" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Duration" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0">0</SelectItem>
                              <SelectItem value="0-10000">0-10000</SelectItem>
                              <SelectItem value="10000-20000">
                                10000-20000
                              </SelectItem>
                              <SelectItem value="20000-30000">
                                20000-30000
                              </SelectItem>
                              <SelectItem value="30000-40000">
                                30000-40000
                              </SelectItem>
                              <SelectItem value="40000 - 50000">
                                40000 - 50000
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connection">
            <Card>
              <CardHeader>
                <CardTitle>Connection Information</CardTitle>
                <CardDescription>
                  Details about the network connection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="protocol_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Protocol Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a protocol type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tcp">TCP</SelectItem>
                              <SelectItem value="udp">UDP</SelectItem>
                              <SelectItem value="icmp">ICMP</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Service</FormLabel>
                          <FormControl>
                            <Input placeholder="service" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="flag"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Flag</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a flag" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="SF">SF</SelectItem>
                              <SelectItem value="S0">S0</SelectItem>
                              <SelectItem value="REJ">REJ</SelectItem>
                              <SelectItem value="RSTR">RSTR</SelectItem>
                              <SelectItem value="RSTO">RSTO</SelectItem>
                              <SelectItem value="S1">S1</SelectItem>
                              <SelectItem value="SH">SH</SelectItem>
                              <SelectItem value="S2">S2</SelectItem>
                              <SelectItem value="RSTOS0">RSTOS0</SelectItem>
                              <SelectItem value="S3">S3</SelectItem>
                              <SelectItem value="OTH">OTH</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-medium">Error Rates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="serror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>serror Rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="srv_serror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>srv serror Rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="rerror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>rerror Rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="srv_rerror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>srv rerror Rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="host">
            <Card>
              <CardHeader>
                <CardTitle>Host Metrics</CardTitle>
                <CardDescription>
                  Metrics related to destination host
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="dst_host_count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Destination Host Count</FormLabel>
                          <FormControl>
                            <Input placeholder="dst_host_count" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="dst_host_srv_count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Enter Destination Host service Count
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="dst_host_srv_count"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-lg font-medium">Host Rates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_same_srv_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host same srv rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_diff_srv_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host diff srv Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_same_src_port_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst_host_same_src_port_rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_srv_diff_host_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host srv diff host Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-lg font-medium">Host Error Rates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_serror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host serror Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_srv_serror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host srv serror Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_rerror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host rerror Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="dst_host_srv_rerror_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>
                              dst host srv rerror Rate - {value}
                            </FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="service">
            <Card>
              <CardHeader>
                <CardTitle>Service Metrics</CardTitle>
                <CardDescription>
                  Metrics related to service connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Count</FormLabel>
                          <FormControl>
                            <Input placeholder="count" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="srv_count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter srv count </FormLabel>
                          <FormControl>
                            <Input placeholder="srv_count" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-lg font-medium">Service Rates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="same_srv_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel> same srv rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="diff_srv_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>diff srv rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="srv_diff_host_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>srv diff host rate - {value}</FormLabel>
                            <FormControl>
                              <Slider
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[value]}
                                onValueChange={(vals) => {
                                  onChange(vals[0]);
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Flags</CardTitle>
                <CardDescription>
                  Security-related indicators and flags
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="land"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Land</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value} // convert number to boolean for UI
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="wrong_fragment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Wrong Fragment</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="urgent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Urgent</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="hot"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Hot</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="logged_in"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Logged in</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="root_shell"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>root shell</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="su_attempted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Su Attempted</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="is_host_login"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Is Host Login</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="is_guest_login"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Is guest login</FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(val) => field.onChange(val ? 1 : 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_failed_logins"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Failed Logins</FormLabel>
                          <FormControl>
                            <Input placeholder="num_failed_logins" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_compromised"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num compromised</FormLabel>
                          <FormControl>
                            <Input placeholder="num_compromised" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_root"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Root</FormLabel>
                          <FormControl>
                            <Input placeholder="num_root" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_file_creations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num File Creations</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="num_file_creations"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_shells"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Shells</FormLabel>
                          <FormControl>
                            <Input placeholder="num_shells" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_access_files"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num access files</FormLabel>
                          <FormControl>
                            <Input placeholder="num_access_files" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="num_outbound_cmds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>num outbound cmds</FormLabel>
                          <FormControl>
                            <Input placeholder="num_outbound_cmds" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button type="submit" size="lg">
            Analyze Traffic
          </Button>
        </div>
      </form>
    </Form>
  );
}

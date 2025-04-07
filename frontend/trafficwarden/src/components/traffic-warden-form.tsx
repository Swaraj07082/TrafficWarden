"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Label } from "@/components/ui/label";
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
  duration: z.coerce.number({
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
  land: z.boolean({
    required_error: "Field is required",
  }),
  wrong_fragment: z.boolean({
    required_error: "Field is required",
  }),
  urgent: z.boolean({
    required_error: "Field is required",
  }),
  hot: z.boolean({
    required_error: "Field is required",
  }),
  num_failed_logins: z.coerce.number({
    required_error: "Field is required",
  }),
  logged_in: z.boolean({
    required_error: "Field is required",
  }),
  num_compromised: z.coerce.number({
    required_error: "Field is required",
  }),
  root_shell: z.boolean({
    required_error: "Field is required",
  }),
  su_attempted: z.boolean({
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
  is_host_login: z.boolean({
    required_error: "Field is required",
  }),
  is_guest_login: z.boolean({
    required_error: "Field is required",
  }),
  count: z.coerce.number({
    required_error: "Field is required",
  }),
  srv_count: z.coerce.number({
    required_error: "Field is required",
  }),
  serror_rate: z.number({
    required_error: "Field is required",
  }),
  srv_serror_rate: z.number({
    required_error: "Field is required",
  }),
  rerror_rate: z.number({
    required_error: "Field is required",
  }),
  srv_rerror_rate: z.number({
    required_error: "Field is required",
  }),
  same_srv_rate: z.number({
    required_error: "Field is required",
  }),
  diff_srv_rate: z.number({
    required_error: "Field is required",
  }),
  srv_diff_host_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_count: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_srv_count: z.coerce.number({
    required_error: "Field is required",
  }),
  dst_host_same_srv_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_diff_srv_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_same_src_port_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_srv_diff_host_rate: z.number({
    required_error: "Field is required",
  }),

  dst_host_serror_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_srv_serror_rate: z.number({
    required_error: "Field is required",
  }),
  dst_host_rerror_rate: z.number({
    required_error: "Field is required",
  }),

  dst_host_srv_rerror_rate: z.number({
    required_error: "Field is required",
  }),
});

export default function TrafficWardenForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      src_bytes: 0,
      dst_bytes: 0,
      duration: 0,
      service: "",
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
      serror_rate : 0,
      srv_serror_rate : 0,
      rerror_rate : 0,
      srv_rerror_rate : 0,
      dst_host_same_srv_rate : 0,
      dst_host_diff_srv_rate : 0,
      dst_host_same_src_port_rate : 0,
      dst_host_srv_diff_host_rate : 0,
      dst_host_serror_rate : 0,
      dst_host_srv_serror_rate : 0,
      dst_host_rerror_rate : 0,
      dst_host_srv_rerror_rate :0,
      same_srv_rate : 0,
      diff_srv_rate : 0,
      srv_diff_host_rate : 0
    
    },
  });

  // const [formData, setFormData] = useState({
  //   // Basic metrics
  //   src_bytes: "",
  //   dst_bytes: "",
  //   duration: "",

  //   // Connection info
  //   protocol_type: "tcp",
  //   service: "",
  //   flag: "",

  //   // Error rates
  //   serror_rate: 0,
  //   srv_serror_rate: 0,
  //   rerror_rate: 0,
  //   srv_rerror_rate: 0,

  //   // Host metrics
  //   dst_host_count: "",
  //   dst_host_srv_count: "",
  //   dst_host_same_srv_rate: 0,
  //   dst_host_diff_srv_rate: 0,
  //   dst_host_same_src_port_rate: 0,
  //   dst_host_srv_diff_host_rate: 0,
  //   dst_host_serror_rate: 0,
  //   dst_host_srv_serror_rate: 0,
  //   dst_host_rerror_rate: 0,
  //   dst_host_srv_rerror_rate: 0,

  //   // Service metrics
  //   count: "",
  //   srv_count: "",
  //   same_srv_rate: 0,
  //   diff_srv_rate: 0,
  //   srv_diff_host_rate: 0,

  //   // Security flags
  //   land: false,
  //   wrong_fragment: false,
  //   urgent: false,
  //   hot: false,
  //   num_failed_logins: "",
  //   logged_in: false,
  //   num_compromised: "",
  //   root_shell: false,
  //   su_attempted: false,
  //   num_root: "",
  //   num_file_creations: "",
  //   num_shells: "",
  //   num_access_files: "",
  //   num_outbound_cmds: "",
  //   is_host_login: false,
  //   is_guest_login: false,
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  // const handleSelectChange = (name: string, value: string) => {
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSliderChange = (name: string, value: number[]) => {
  //   setFormData({
  //     ...formData,
  //     [name]: value[0],
  //   });
  // };

  // const handleSwitchChange = (name: string, checked: boolean) => {
  //   setFormData({
  //     ...formData,
  //     [name]: checked,
  //   });
  // };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // e.preventDefault();
    console.log("Form data submitted:", values);
    // Here you would typically send the data to your backend
    alert("Data submitted successfully!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="host">Host Metrics</TabsTrigger>
            <TabsTrigger value="service">Service Metrics</TabsTrigger>
            <TabsTrigger value="security">Security Flags</TabsTrigger>
          </TabsList>

          {/* Basic Metrics Tab */}
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
                    {/* <Label htmlFor="src_bytes">Source Bytes</Label>
                    <Input
                      id="src_bytes"
                      name="src_bytes"
                      type="text"
                      placeholder="Enter source bytes"
                      value={formData.src_bytes}
                      onChange={handleInputChange}
                    /> */}
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
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="dst_bytes">Destination Bytes</Label>
                    <Input
                      id="dst_bytes"
                      name="dst_bytes"
                      type="text"
                      placeholder="Enter destination bytes"
                      value={formData.dst_bytes}
                      onChange={handleInputChange}
                    /> */}

                    <FormField
                      control={form.control}
                      name="dst_bytes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter destination bytes</FormLabel>
                          <FormControl>
                            <Input placeholder="dst_bytes" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      name="duration"
                      type="text"
                      placeholder="Enter duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter duration</FormLabel>
                          <FormControl>
                            <Input placeholder="duration" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connection Info Tab */}
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
                    {/* <Label htmlFor="protocol_type">Protocol Type</Label>
                    <Select
                      value={formData.protocol_type}
                      onValueChange={(value) =>
                        handleSelectChange("protocol_type", value)
                      }
                    >
                      <SelectTrigger id="protocol_type">
                        <SelectValue placeholder="Select protocol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tcp">TCP</SelectItem>
                        <SelectItem value="udp">UDP</SelectItem>
                        <SelectItem value="icmp">ICMP</SelectItem>
                      </SelectContent>
                    </Select> */}
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
                    {/* <Label htmlFor="service">Service</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="Enter service"
                      value={formData.service}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Service</FormLabel>
                          <FormControl>
                            <Input placeholder="service" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="flag">Flag</Label>
                    <Select
                      value={formData.flag}
                      onValueChange={(value) =>
                        handleSelectChange("flag", value)
                      }
                    >
                      <SelectTrigger id="flag">
                        <SelectValue placeholder="Select flag" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sf">SF</SelectItem>
                        <SelectItem value="s0">S0</SelectItem>
                        <SelectItem value="rej">REJ</SelectItem>
                        <SelectItem value="rstr">RSTR</SelectItem>
                        <SelectItem value="rsto">RSTO</SelectItem>
                        <SelectItem value="s1">S1</SelectItem>
                        <SelectItem value="sh">SH</SelectItem>
                        <SelectItem value="s2">S2</SelectItem>
                        <SelectItem value="rstos0">RSTOS0</SelectItem>
                        <SelectItem value="s3">S3</SelectItem>
                        <SelectItem value="oth">OTH</SelectItem>
                      </SelectContent>
                    </Select> */}
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
                              <SelectItem value="sf">SF</SelectItem>
                              <SelectItem value="s0">S0</SelectItem>
                              <SelectItem value="rej">REJ</SelectItem>
                              <SelectItem value="rstr">RSTR</SelectItem>
                              <SelectItem value="rsto">RSTO</SelectItem>
                              <SelectItem value="s1">S1</SelectItem>
                              <SelectItem value="sh">SH</SelectItem>
                              <SelectItem value="s2">S2</SelectItem>
                              <SelectItem value="rstos0">RSTOS0</SelectItem>
                              <SelectItem value="s3">S3</SelectItem>
                              <SelectItem value="oth">OTH</SelectItem>
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
                      {/* <div className="flex justify-between">
                        <Label htmlFor="serror_rate">SError Rate</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.serror_rate}
                        </span>
                      </div> */}
                      {/* <Slider
                        id="serror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.serror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("serror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="srv_serror_rate">Srv SError Rate</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.srv_serror_rate}
                        </span>
                      </div> */}
                      {/* <Slider
                        id="srv_serror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.srv_serror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("srv_serror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="rerror_rate">RError Rate</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.rerror_rate}
                        </span>
                      </div>
                      <Slider
                        id="rerror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.rerror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("rerror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="srv_rerror_rate">Srv RError Rate</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.srv_rerror_rate}
                        </span>
                      </div>
                      <Slider
                        id="srv_rerror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.srv_rerror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("srv_rerror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
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

          {/* Host Metrics Tab */}
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
                    {/* <Label htmlFor="dst_host_count">
                      Destination Host Count
                    </Label>
                    <Input
                      id="dst_host_count"
                      name="dst_host_count"
                      type="number"
                      placeholder="Enter count"
                      value={formData.dst_host_count}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="dst_host_count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Destination Host Count</FormLabel>
                          <FormControl>
                            <Input placeholder="dst_host_count" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="dst_host_srv_count">
                      Destination Host Service Count
                    </Label>
                    <Input
                      id="dst_host_srv_count"
                      name="dst_host_srv_count"
                      type="number"
                      placeholder="Enter count"
                      value={formData.dst_host_srv_count}
                      onChange={handleInputChange}
                    /> */}
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
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
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
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_same_srv_rate">
                          Same Service Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_same_srv_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_same_srv_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_same_srv_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_same_srv_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_diff_srv_rate">
                          Different Service Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_diff_srv_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_diff_srv_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_diff_srv_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_diff_srv_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_same_src_port_rate">
                          Same Source Port Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_same_src_port_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_same_src_port_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_same_src_port_rate]}
                        onValueChange={(value) =>
                          handleSliderChange(
                            "dst_host_same_src_port_rate",
                            value
                          )
                        }
                      /> */}
                      <FormField
                        control={form.control}
                        name="dst_host_same_src_port_rate"
                        render={({ field: { value, onChange } }) => (
                          <FormItem>
                            <FormLabel>dst_host_same_src_port_rate - {value}</FormLabel>
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_srv_diff_host_rate">
                          Service Different Host Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_srv_diff_host_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_srv_diff_host_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_srv_diff_host_rate]}
                        onValueChange={(value) =>
                          handleSliderChange(
                            "dst_host_srv_diff_host_rate",
                            value
                          )
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
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
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_serror_rate">
                          SError Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_serror_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_serror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_serror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_serror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_srv_serror_rate">
                          Service SError Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_srv_serror_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_srv_serror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_srv_serror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_srv_serror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_rerror_rate">
                          RError Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_rerror_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_rerror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_rerror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_rerror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="dst_host_srv_rerror_rate">
                          Service RError Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.dst_host_srv_rerror_rate}
                        </span>
                      </div>
                      <Slider
                        id="dst_host_srv_rerror_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.dst_host_srv_rerror_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("dst_host_srv_rerror_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
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

          {/* Service Metrics Tab */}
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
                    {/* <Label htmlFor="count">Connection Count</Label>
                    <Input
                      id="count"
                      name="count"
                      type="number"
                      placeholder="Enter count"
                      value={formData.count}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Count</FormLabel>
                          <FormControl>
                            <Input placeholder="count" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="srv_count">Service Count</Label>
                    <Input
                      id="srv_count"
                      name="srv_count"
                      type="number"
                      placeholder="Enter count"
                      value={formData.srv_count}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="srv_count"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter srv count </FormLabel>
                          <FormControl>
                            <Input placeholder="srv_count" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
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
                      {/* <div className="flex justify-between">
                        <Label htmlFor="same_srv_rate">Same Service Rate</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.same_srv_rate}
                        </span>
                      </div>
                      <Slider
                        id="same_srv_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.same_srv_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("same_srv_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="diff_srv_rate">
                          Different Service Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.diff_srv_rate}
                        </span>
                      </div>
                      <Slider
                        id="diff_srv_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.diff_srv_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("diff_srv_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      {/* <div className="flex justify-between">
                        <Label htmlFor="srv_diff_host_rate">
                          Service Different Host Rate
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.srv_diff_host_rate}
                        </span>
                      </div>
                      <Slider
                        id="srv_diff_host_rate"
                        min={0}
                        max={1}
                        step={0.01}
                        value={[formData.srv_diff_host_rate]}
                        onValueChange={(value) =>
                          handleSliderChange("srv_diff_host_rate", value)
                        }
                      /> */}
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
                            {/* <FormDescription>
                              This is a description for the price.
                            </FormDescription> */}
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

          {/* Security Flags Tab */}
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
                      {/* <Switch
                        id="land"
                        checked={formData.land}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("land", checked)
                        }
                      />
                      <Label htmlFor="land">Land</Label> */}
                      <FormField
                        control={form.control}
                        name="land"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Land</FormLabel>
                              {/* <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="wrong_fragment"
                        checked={formData.wrong_fragment}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("wrong_fragment", checked)
                        }
                      />
                      <Label htmlFor="wrong_fragment">Wrong Fragment</Label> */}
                      <FormField
                        control={form.control}
                        name="wrong_fragment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Wrong Fragment</FormLabel>
                              {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="urgent"
                        checked={formData.urgent}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("urgent", checked)
                        }
                      />
                      <Label htmlFor="urgent">Urgent</Label> */}
                      <FormField
                        control={form.control}
                        name="urgent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Urgent</FormLabel>
                              {/* <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="hot"
                        checked={formData.hot}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("hot", checked)
                        }
                      />
                      <Label htmlFor="hot">Hot</Label> */}
                      <FormField
                        control={form.control}
                        name="hot"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Hot</FormLabel>
                              {/* <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="logged_in"
                        checked={formData.logged_in}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("logged_in", checked)
                        }
                      />
                      <Label htmlFor="logged_in">Logged In</Label> */}
                      <FormField
                        control={form.control}
                        name="logged_in"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Logged in</FormLabel>
                              {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="root_shell"
                        checked={formData.root_shell}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("root_shell", checked)
                        }
                      />
                      <Label htmlFor="root_shell">Root Shell</Label> */}
                      <FormField
                        control={form.control}
                        name="root_shell"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>root shell</FormLabel>
                              {/* <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="su_attempted"
                        checked={formData.su_attempted}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("su_attempted", checked)
                        }
                      />
                      <Label htmlFor="su_attempted">Su Attempted</Label> */}
                      <FormField
                        control={form.control}
                        name="su_attempted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Su Attempted</FormLabel>
                              {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="is_host_login"
                        checked={formData.is_host_login}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("is_host_login", checked)
                        }
                      />
                      <Label htmlFor="is_host_login">Is Host Login</Label> */}
                      <FormField
                        control={form.control}
                        name="is_host_login"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Is Host Login</FormLabel>
                              {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Switch
                        id="is_guest_login"
                        checked={formData.is_guest_login}
                        onCheckedChange={(checked) =>
                          handleSwitchChange("is_guest_login", checked)
                        }
                      />
                      <Label htmlFor="is_guest_login">Is Guest Login</Label> */}
                      <FormField
                        control={form.control}
                        name="is_guest_login"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Is guest login</FormLabel>
                              {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
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
                    {/* <Label htmlFor="num_failed_logins">Failed Logins</Label>
                    <Input
                      id="num_failed_logins"
                      name="num_failed_logins"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_failed_logins}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_failed_logins"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Failed Logins</FormLabel>
                          <FormControl>
                            <Input placeholder="num_failed_logins" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_compromised">Compromised</Label>
                    <Input
                      id="num_compromised"
                      name="num_compromised"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_compromised}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_compromised"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num compromised</FormLabel>
                          <FormControl>
                            <Input placeholder="num_compromised" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_root">Root</Label>
                    <Input
                      id="num_root"
                      name="num_root"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_root}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_root"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Root</FormLabel>
                          <FormControl>
                            <Input placeholder="num_root" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_file_creations">File Creations</Label>
                    <Input
                      id="num_file_creations"
                      name="num_file_creations"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_file_creations}
                      onChange={handleInputChange}
                    /> */}
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
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_shells">Shells</Label>
                    <Input
                      id="num_shells"
                      name="num_shells"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_shells}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_shells"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num Shells</FormLabel>
                          <FormControl>
                            <Input placeholder="num_shells" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_access_files">Access Files</Label>
                    <Input
                      id="num_access_files"
                      name="num_access_files"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_access_files}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_access_files"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num access files</FormLabel>
                          <FormControl>
                            <Input placeholder="num_access_files" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <Label htmlFor="num_outbound_cmds">Outbound Commands</Label>
                    <Input
                      id="num_outbound_cmds"
                      name="num_outbound_cmds"
                      type="number"
                      placeholder="Enter count"
                      value={formData.num_outbound_cmds}
                      onChange={handleInputChange}
                    /> */}
                    <FormField
                      control={form.control}
                      name="num_outbound_cmds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>num outbound cmds</FormLabel>
                          <FormControl>
                            <Input placeholder="num_outbound_cmds" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
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

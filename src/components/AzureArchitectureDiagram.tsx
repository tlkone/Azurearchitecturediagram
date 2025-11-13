import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Building2,
  Network,
  Shield,
  Key,
  BarChart3,
  Users,
  Globe,
  Lock,
  Database,
  FileText,
  Settings,
  Cloud,
  Layers,
  GitBranch,
  CheckCircle,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';

export function AzureArchitectureDiagram() {
  return (
    <div className="space-y-6">
      {/* Header with Legend */}
      <Card className="p-4 bg-white">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-slate-900">Legend:</h3>
          <Badge className="bg-blue-600">Management Group</Badge>
          <Badge className="bg-green-600">Virtual Network</Badge>
          <Badge className="bg-purple-600">Resource Group</Badge>
          <Badge className="bg-orange-600">Policy/RBAC</Badge>
        </div>
      </Card>

      {/* Main Architecture Diagram */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Management Groups Hierarchy */}
        <div className="xl:col-span-4 space-y-4">
          <div className="sticky top-4">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-blue-900">Tenant Root Group</h3>
              </div>

              <div className="space-y-3">
                {/* Platform Management Group */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
                  <div className="ml-4 space-y-2">
                    <Card className="p-4 bg-purple-50 border-2 border-purple-300">
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-900">Platform</span>
                        <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                      </div>

                      <div className="space-y-2 ml-2">
                        <Card className="p-3 bg-white border-indigo-200">
                          <div className="flex items-center gap-2">
                            <Key className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm text-indigo-900">Identity</span>
                            <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                          </div>
                          <div className="mt-2 text-xs text-slate-600 space-y-1">
                            <div className="flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              <span>kv-core</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>Managed Identity</span>
                            </div>
                          </div>
                        </Card>

                        <Card className="p-3 bg-white border-green-200">
                          <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-900">Management</span>
                            <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                          </div>
                          <div className="mt-2 text-xs text-slate-600 space-y-1">
                            <div className="flex items-center gap-1">
                              <BarChart3 className="w-3 h-3" />
                              <span>Log Analytics</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Settings className="w-3 h-3" />
                              <span>Automation Account</span>
                            </div>
                          </div>
                        </Card>

                        <Card className="p-3 bg-white border-blue-200">
                          <div className="flex items-center gap-2">
                            <Network className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-900">Connectivity</span>
                            <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                          </div>
                          <div className="mt-2 text-xs text-slate-600 space-y-1">
                            <div className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              <span>Hub VNet</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              <span>Azure Firewall</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Card>

                    {/* Landing Zones Management Group */}
                    <Card className="p-4 bg-orange-50 border-2 border-orange-300">
                      <div className="flex items-center gap-2 mb-3">
                        <Cloud className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-900">Landing Zones</span>
                        <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                      </div>

                      <div className="space-y-2 ml-2">
                        <Card className="p-3 bg-white border-red-200">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-red-900">Corp</span>
                            <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                          </div>
                        </Card>

                        <Card className="p-3 bg-white border-amber-200">
                          <div className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-amber-600" />
                            <span className="text-sm text-amber-900">Sandbox</span>
                            <Badge className="ml-auto bg-blue-600 text-xs">MG</Badge>
                          </div>
                          <p className="mt-1 text-xs text-slate-600">Active Subscription</p>
                        </Card>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* MIDDLE COLUMN: Network Topology */}
        <div className="xl:col-span-5 space-y-4">
          <Card className="p-6 bg-white border-2 border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-6 h-6 text-blue-600" />
              <h3 className="text-slate-900">Hub-Spoke Network Topology</h3>
            </div>

            {/* Hub VNet */}
            <div className="flex justify-center mb-6">
              <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white w-full max-w-sm">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h4 className="mb-1">Hub VNet</h4>
                  <p className="text-sm opacity-90">vnet-hub</p>
                  <Badge className="mt-2 bg-white/20 border-white/40">10.0.0.0/16</Badge>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Azure Firewall</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Network className="w-4 h-4" />
                      <span>VPN Gateway</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span>Bastion Host</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Peering Indicator */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-8 w-px bg-slate-400"></div>
              <ArrowDown className="w-5 h-5 text-slate-600" />
              <Badge variant="outline" className="border-blue-400 text-blue-700">
                VNet Peering
              </Badge>
              <ArrowDown className="w-5 h-5 text-slate-600" />
              <div className="h-8 w-px bg-slate-400"></div>
            </div>

            {/* Spoke VNets */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="text-center">
                  <Cloud className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Spoke 1</p>
                  <p className="text-xs opacity-80">vnet-spoke-app1</p>
                  <Badge className="mt-2 bg-white/20 text-xs">10.10.0.0/16</Badge>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <div className="text-center">
                  <Cloud className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Spoke 2</p>
                  <p className="text-xs opacity-80">vnet-spoke-app2</p>
                  <Badge className="mt-2 bg-white/20 text-xs">10.20.0.0/16</Badge>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="text-center">
                  <Cloud className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Spoke 3</p>
                  <p className="text-xs opacity-80">vnet-spoke-shared</p>
                  <Badge className="mt-2 bg-white/20 text-xs">10.30.0.0/16</Badge>
                </div>
              </Card>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span>Allow forwarded traffic enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span>Gateway transit on Hub</span>
              </div>
            </div>
          </Card>

          {/* Resource Groups */}
          <Card className="p-6 bg-white border-2 border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-purple-600" />
              <h3 className="text-slate-900">Key Resources</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card className="p-3 bg-green-50 border-l-4 border-green-500">
                <Badge className="mb-2 bg-purple-600 text-xs">rg-mgmt-logging</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span>Log Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Settings className="w-4 h-4 text-indigo-600" />
                    <span>Automation</span>
                  </div>
                </div>
              </Card>

              <Card className="p-3 bg-indigo-50 border-l-4 border-indigo-500">
                <Badge className="mb-2 bg-purple-600 text-xs">rg-identity-core</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span>Key Vault</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Managed ID</span>
                  </div>
                </div>
              </Card>

              <Card className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <Badge className="mb-2 bg-purple-600 text-xs">rg-network-hub</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Hub VNet</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4 text-orange-600" />
                    <span>Firewall</span>
                  </div>
                </div>
              </Card>

              <Card className="p-3 bg-red-50 border-l-4 border-red-500">
                <Badge className="mb-2 bg-purple-600 text-xs">Security</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4 text-red-600" />
                    <span>Defender</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Soft Delete</span>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN: Governance */}
        <div className="xl:col-span-3 space-y-4">
          <div className="sticky top-4 space-y-4">
            {/* Policies */}
            <Card className="p-4 bg-white border-2 border-orange-300">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-orange-600" />
                <h4 className="text-orange-900">Azure Policies</h4>
              </div>

              <div className="space-y-2 text-sm">
                <div className="p-2 bg-red-50 border-l-2 border-red-500 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Globe className="w-3 h-3 text-red-600" />
                    <span className="text-red-900">Allowed Locations</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">Deny</Badge>
                  <p className="text-xs text-slate-600 mt-1">eastus, centralus</p>
                </div>

                <div className="p-2 bg-orange-50 border-l-2 border-orange-500 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <FileText className="w-3 h-3 text-orange-600" />
                    <span className="text-orange-900">Require Tags</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">Deny</Badge>
                  <p className="text-xs text-slate-600 mt-1">costCenter</p>
                </div>

                <div className="p-2 bg-purple-50 border-l-2 border-purple-500 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Lock className="w-3 h-3 text-purple-600" />
                    <span className="text-purple-900">HTTPS Storage</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">Deny</Badge>
                </div>

                <div className="p-2 bg-blue-50 border-l-2 border-blue-500 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Key className="w-3 h-3 text-blue-600" />
                    <span className="text-blue-900">KV Soft Delete</span>
                  </div>
                  <Badge className="bg-blue-600 text-xs">DeployIfNotExists</Badge>
                </div>

                <div className="p-2 bg-green-50 border-l-2 border-green-500 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span className="text-green-900">Defender Plans</span>
                  </div>
                  <Badge className="bg-green-600 text-xs">DeployIfNotExists</Badge>
                </div>
              </div>

              <div className="mt-3 p-2 bg-green-50 border border-green-300 rounded text-xs">
                <div className="flex items-center gap-1 text-green-900">
                  <CheckCircle className="w-3 h-3" />
                  <span>Compliance: ✅</span>
                </div>
              </div>
            </Card>

            {/* RBAC */}
            <Card className="p-4 bg-white border-2 border-purple-300">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-purple-600" />
                <h4 className="text-purple-900">RBAC Groups</h4>
              </div>

              <div className="space-y-2 text-sm">
                <div className="p-2 bg-purple-50 border-l-2 border-purple-500 rounded">
                  <p className="text-purple-900">platform-ops</p>
                  <Badge className="bg-purple-600 text-xs mt-1">Owner</Badge>
                  <p className="text-xs text-slate-600 mt-1">Platform MG</p>
                </div>

                <div className="p-2 bg-red-50 border-l-2 border-red-500 rounded">
                  <p className="text-red-900">sec-ops</p>
                  <Badge className="bg-red-600 text-xs mt-1">Security Admin</Badge>
                  <p className="text-xs text-slate-600 mt-1">Platform MG</p>
                </div>

                <div className="p-2 bg-blue-50 border-l-2 border-blue-500 rounded">
                  <p className="text-blue-900">net-ops</p>
                  <Badge className="bg-blue-600 text-xs mt-1">Network Contributor</Badge>
                  <p className="text-xs text-slate-600 mt-1">Connectivity MG</p>
                </div>

                <div className="p-2 bg-green-50 border-l-2 border-green-500 rounded">
                  <p className="text-green-900">app-team</p>
                  <Badge className="bg-green-600 text-xs mt-1">Owner</Badge>
                  <p className="text-xs text-slate-600 mt-1">Sandbox MG</p>
                </div>
              </div>
            </Card>

            {/* Validation */}
            <Card className="p-4 bg-white border-2 border-green-300">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="text-green-900">Validation</h4>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-green-700">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Policy compliance verified</span>
                </div>
                <div className="flex items-start gap-2 text-green-700">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Logs in LAW active</span>
                </div>
                <div className="flex items-start gap-2 text-red-700">
                  <Shield className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Wrong region → Denied</span>
                </div>
                <div className="flex items-start gap-2 text-red-700">
                  <FileText className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Missing tag → Denied</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Information */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="mb-2 flex items-center gap-1 text-blue-900">
              <Building2 className="w-4 h-4" />
              Architecture
            </h5>
            <p className="text-slate-700">CAF-Aligned Landing Zone</p>
            <p className="text-xs text-slate-600">Hub-Spoke Topology</p>
          </div>
          <div>
            <h5 className="mb-2 flex items-center gap-1 text-purple-900">
              <Shield className="w-4 h-4" />
              Security
            </h5>
            <p className="text-slate-700">Policy-as-Code Enforced</p>
            <p className="text-xs text-slate-600">RBAC & Defender Enabled</p>
          </div>
          <div>
            <h5 className="mb-2 flex items-center gap-1 text-green-900">
              <Settings className="w-4 h-4" />
              Automation
            </h5>
            <p className="text-slate-700">Terraform IaC Ready</p>
            <p className="text-xs text-slate-600">Centralized Logging</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

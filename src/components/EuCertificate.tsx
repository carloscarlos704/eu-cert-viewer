import { Button } from "@/components/ui/button";
import { Shield, Lock, CheckCircle } from "lucide-react";

const EuCertificate = () => {
  return (
    <div className="min-h-screen bg-background print-friendly">
      {/* Header */}
      <header className="eu-header-bg py-4 px-6 mb-6 print:mb-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-16 bg-white rounded-sm flex items-center justify-center border border-eu-border overflow-hidden">
              <img 
                src="/lovable-uploads/59aed740-667d-4785-98b2-b3428bd7ec99.png" 
                alt="Drapeau de l'Union Européenne" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold tracking-wide">UNIÓN EUROPEA</h1>
              <h2 className="text-lg font-semibold">CERTIFICACIÓN LOGÍSTICA OFICIAL</h2>
              <p className="text-sm opacity-90">Ref. Proceso: EU-ESP-LOG-2025-0814-CS</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">DOCUMENTO OFICIAL</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-8">
        {/* Datos del Cliente */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            DATOS DEL CLIENTE
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nombre completo:</p>
                  <p className="font-semibold text-eu-text">Carlos Javier Molina Sanz</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">DNI:</p>
                  <p className="font-semibold text-eu-text">25135417M</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">Dirección:</p>
                  <p className="font-semibold text-eu-text">Calle Val Alta, nº 15, Casa 2, 50800 Zuera, Zaragoza, España</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo electrónico:</p>
                  <p className="font-semibold text-eu-text">carlosmolinasanz@hotmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-4 border-2 border-eu-border rounded-sm shadow-md">
                <p className="text-xs text-muted-foreground mb-2 text-center font-semibold">DOCUMENTO DE IDENTIDAD</p>
                <img 
                  src="/lovable-uploads/c5be33e0-df5c-4de0-9143-ad49cecedd9e.png" 
                  alt="DNI de Carlos Javier Molina Sanz" 
                  className="max-w-[280px] w-full h-auto rounded border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Información del Vehículo */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            INFORMACIÓN DEL VEHÍCULO
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-sm p-4 mb-4">
            <p className="text-green-800 font-semibold">
              Estado del proceso: Preparación logística completada – Certificado disponible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Vehículo:</p>
              <p className="font-semibold text-eu-text">Rapido 8066 DF Alde</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Año del modelo:</p>
              <p className="font-semibold text-eu-text">2022</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kilometraje:</p>
              <p className="font-semibold text-eu-text">26.500 km (Certificado)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Precio de compra:</p>
              <p className="font-semibold text-eu-text">32.500 €</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Caja de cambios:</p>
              <p className="font-semibold text-eu-text">Automática</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Combustible:</p>
              <p className="font-semibold text-eu-text">Diesel</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Potencia:</p>
              <p className="font-semibold text-eu-text">150 CV</p>
            </div>
          </div>
        </section>

        {/* Servicios Certificados */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            SERVICIOS CERTIFICADOS INCLUIDOS – PAQUETE SEGURIDAD EXPRESS
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-eu-blue to-eu-blue-dark text-white">
                  <th className="border border-eu-border px-4 py-3 text-left font-semibold">Código</th>
                  <th className="border border-eu-border px-4 py-3 text-left font-semibold">Descripción</th>
                  <th className="border border-eu-border px-4 py-3 text-center font-semibold">Validez</th>
                  <th className="border border-eu-border px-4 py-3 text-right font-semibold">Valor (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-eu-light transition-colors">
                  <td className="border border-eu-border px-4 py-3 font-mono text-sm bg-slate-50">EU-290-TUV</td>
                  <td className="border border-eu-border px-4 py-3">Inspección técnica oficial TÜV</td>
                  <td className="border border-eu-border px-4 py-3 text-center">24 meses</td>
                  <td className="border border-eu-border px-4 py-3 text-right font-semibold">1.500,00</td>
                </tr>
                <tr className="hover:bg-eu-light transition-colors">
                  <td className="border border-eu-border px-4 py-3 font-mono text-sm bg-slate-50">EU-416-ADMINT</td>
                  <td className="border border-eu-border px-4 py-3">Trámite y verificación administrativa interna</td>
                  <td className="border border-eu-border px-4 py-3 text-center">—</td>
                  <td className="border border-eu-border px-4 py-3 text-right font-semibold">1.050,00</td>
                </tr>
                <tr className="hover:bg-eu-light transition-colors">
                  <td className="border border-eu-border px-4 py-3 font-mono text-sm bg-slate-50">EU-723-GAR12M</td>
                  <td className="border border-eu-border px-4 py-3">Garantía técnica europea</td>
                  <td className="border border-eu-border px-4 py-3 text-center">12 meses</td>
                  <td className="border border-eu-border px-4 py-3 text-right font-semibold">1.350,00</td>
                </tr>
                <tr className="hover:bg-eu-light transition-colors">
                  <td className="border border-eu-border px-4 py-3 font-mono text-sm bg-slate-50">EU-850-LOGSUP</td>
                  <td className="border border-eu-border px-4 py-3">Supervisión logística y coordinación interna</td>
                  <td className="border border-eu-border px-4 py-3 text-center">—</td>
                  <td className="border border-eu-border px-4 py-3 text-right font-semibold">1.932,50</td>
                </tr>
                <tr className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                  <td colSpan={3} className="border border-eu-border px-4 py-4 font-bold text-right text-lg bg-transparent">
                    Total certificado (con IVA):
                  </td>
                  <td className="border border-eu-border px-4 py-4 text-right font-bold text-xl text-green-700 bg-transparent">
                    5.832,50 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conformidad */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            CONFORMIDAD
          </h3>
          <p className="text-eu-text text-justify leading-relaxed">
            El presente documento cumple con la normativa de la Unión Europea aplicable a la exportación y entrega 
            transfronteriza de vehículos entre los Países Bajos y España. Es válido a efectos de registro y matriculación 
            en España, de acuerdo con la legislación europea vigente. Este certificado es válido en formato electrónico 
            y puede ser verificado en la sede del vendedor Auto PH.
          </p>
        </section>

        {/* Contactos Oficiales */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            CONTACTOS OFICIALES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-eu-text mb-2">Auto PH</h4>
              <p className="text-sm text-muted-foreground mb-1">Empresa concesionaria de automóviles</p>
              <p className="text-eu-text">Autolettestraat 10, 3063 NP Rotterdam</p>
              <p className="text-eu-text">Países Bajos</p>
              <p className="text-eu-text mt-2">
                <span className="text-sm text-muted-foreground">Representada por:</span><br />
                Sr. Thomas Hamelin
              </p>
            </div>
            <div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono:</p>
                  <p className="font-semibold text-eu-text">+39 376 176 2290</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo electrónico:</p>
                  <p className="font-semibold text-eu-text">contact@autopbh.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seguridad y Validación */}
        <section className="certificate-section bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-eu-blue">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-eu-blue" />
            VALIDACIÓN Y SEGURIDAD DEL DOCUMENTO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-eu-text mb-1">Certificado Digital</h4>
                <p className="text-sm text-muted-foreground">Documento verificado con firma digital europea</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-6 h-6 text-eu-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-eu-text mb-1">Encriptación SSL</h4>
                <p className="text-sm text-muted-foreground">Protección de datos de nivel bancario</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-eu-text mb-1">Conformidad UE</h4>
                <p className="text-sm text-muted-foreground">Cumple normativas GDPR y regulaciones UE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Profesional */}
        <footer className="mt-8 pt-6 border-t-2 border-eu-blue bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-eu-text mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Información del Documento
              </h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Fecha de emisión:</span> <span className="font-semibold">14 de agosto de 2025</span></p>
                <p><span className="text-muted-foreground">ID del certificado:</span> <span className="font-mono text-xs">EU-ESP-LOG-2025-0814-CS</span></p>
                <p><span className="text-muted-foreground">Válido hasta:</span> <span className="font-semibold">14 de agosto de 2027</span></p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-eu-text mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-eu-blue" />
                Verificación de Seguridad
              </h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Certificado SSL válido</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Firma digital verificada</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Cumplimiento GDPR</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-eu-border pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-xs text-muted-foreground mb-1">
                  © 2025 Unión Europea - Departamento de Certificación Logística
                </p>
                <p className="text-xs text-muted-foreground">
                  Este documento está protegido por las leyes de la Unión Europea sobre falsificación de documentos oficiales.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 border border-eu-border rounded-sm flex items-center justify-center bg-white">
                    <div className="text-xs text-center text-muted-foreground">
                      <div className="text-lg">📱</div>
                      <div className="text-[10px]">QR Verify</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-12 border border-eu-border rounded-sm flex items-center justify-center bg-white">
                    <p className="text-[10px] text-muted-foreground text-center">
                      Sello Digital<br/>Certificado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default EuCertificate;
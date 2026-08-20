import { Request, Response, NextFunction } from 'express';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const configPath = path.join(__dirname, 'compat-config.yaml');
const compatConfig = yaml.load(fs.readFileSync(configPath, 'utf8')) as any;

export function apiVersionCompatMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const requestedVersion = req.headers['x-api-version'] || compatConfig.compatLayer.defaultVersion;

  if (!compatConfig.compatLayer.supportedVersions.includes(requestedVersion)) {
    return res.status(400).json({
      error: 'Unsupported API version',
      supported: compatConfig.compatLayer.supportedVersions,
    });
  }

  // Attach version to request
  (req as any).apiVersion = requestedVersion;

  // Optional: auto-upgrade legacy requests
  if (
    compatConfig.behaviors.autoUpgradeRequests &&
    requestedVersion === 'v1'
  ) {
    (req as any).apiVersion = 'v2';
  }

  next();
}
